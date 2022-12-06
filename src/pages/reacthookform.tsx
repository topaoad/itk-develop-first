import { useForm } from "react-hook-form";

function App() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<submitType>();

  type submitType = {
    name: string;
    email: string;
    password: string;
  };

  const onSubmit = (data: submitType) => console.log(data);

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
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
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}
export default App;
