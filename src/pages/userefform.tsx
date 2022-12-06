import { useRef } from "react";

function App() {
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (emailRef && passwordRef) {
      console.log({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(emailRef.current);
      console.log(passwordRef.current);
    }
  };

  return (
    //  ラベルのhtmlForはinputのidとリンク
    <div className="App">
      <h1>ログイン</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="emaill" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            name="password"
            ref={passwordRef}
            type="password"
          />
        </div>

        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
