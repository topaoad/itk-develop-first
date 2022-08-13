import React from "react";
import CustomNextPage from "next";
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Textarea } from "@mantine/core";

export const FormList = () => {
  //mantineバージョン
  const form = useForm({
    initialValues: { name: "", email: "", message: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      // name: (value) =>
      //   value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length < 1 ? "you must input at least one message" : null,
    },
  });

  // const registerUser = async (event) => {
  //   // event.preventDefault();これがあるとフォームのリセットがされない

  //   const res = await fetch("/api/send", {
  //     body: JSON.stringify({
  //       name: event.target.name.value,
  //       email: event.target.email.value,
  //       message: event.target.message.value,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   });

  //   const result = await res.json();
  // };

  return (
    //mantineバージョン※onsubmitだけ変更
    <form onSubmit={console.log("成功")}>
      <TextInput
        name="name"
        label="お名前"
        placeholder="山田　太郎"
        {...form.getInputProps("name")}
        required
      />
      <TextInput
        mt="sm"
        name="email"
        type="email"
        label="メールアドレス"
        placeholder="xyz@gmail.com"
        {...form.getInputProps("email")}
        required
      />
      <Textarea
        id="message"
        placeholder="今日はありがとうございました"
        label="コメントを入力してください"
        name="message"
        required
        {...form.getInputProps("message")}
      />
      <Button type="submit" mt="sm">
        送信
      </Button>
      <Button variant="outline" onClick={() => form.reset()}>
        リセット
      </Button>
    </form>
  );
};
