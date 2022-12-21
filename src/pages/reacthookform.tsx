import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth, useUser } from "../hooks/firebase";

const Loginpage: NextPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<submitType>();

  type submitType = {
    name?: string;
    email: string;
    password: string;
    passwordConfirm?: string;
  };

  const auth = useAuth();
  const currentUser = useUser();
  const [isProcessingSignup, setIsProcessingSignup] = useState(false);
  const router = useRouter();

  // 書き方１普通のtry~catch文
  const signup = async (data: submitType) => {
    console.log(data.email);
    console.log(data.password);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const postsData = await response.json();
      console.log(postsData);
    } catch (error) {
      console.error(error);
    }
  };

  // 一旦パスワード判定をしたうえでデータフェッチを行っています
  const onSubmit: SubmitHandler<submitType> = ({
    email,
    password,
    passwordConfirm,
  }) => {
    console.log(password);
    console.log(passwordConfirm);
    if (password === passwordConfirm) {
      signup({ email, password });
    } else {
      alert("パスワードが一致しません");
    }
  };

  useEffect(() => {
    if (currentUser) router.push("/");
  }, [currentUser, router]);

  return (
    <div className="App">
      <h1>ログイン画面をreact-hoook-formsで実装しています</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register("email", {
              minLength: {
                message: "8文字以上入力してください。",
                value: 8,
              },
              required: {
                message: "入力が必須の項目です。",
                value: true,
              },
            })}
          />
        </div>
        {errors.email?.message && <div>{errors.email.message}</div>}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            {...register("password", {
              minLength: {
                message: "8文字以上入力してください。",
                value: 8,
              },
              required: {
                message: "入力が必須の項目です。",
                value: true,
              },
            })}
            type="password"
          />
        </div>
        {errors.password?.message && <div>{errors.password.message}</div>}
        <div>
          <label htmlFor="passwordConfirm">passwordconfirm:</label>
          <input
            id="passwordConfirm"
            {...register("passwordConfirm", {
              minLength: {
                message: "8文字以上入力してください。",
                value: 8,
              },
              required: {
                message: "入力が必須の項目です。",
                value: true,
              },
            })}
            type="password"
          />
        </div>
        {errors.passwordConfirm?.message && (
          <div>{errors.passwordConfirm.message}</div>
        )}
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};
export default Loginpage;
