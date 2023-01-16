import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useRecoilState } from "recoil";
import { TodoHeaderRecoil } from "src/components/TodoHeaderRecoil";
import { todosState } from "src/state/todorecoil";

const AddRecoil: NextPage = () => {
  // Atomの状態読み取り
  const [todos, setTodos] = useRecoilState(todosState);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: prevTodos.length + 1, text, isDone: false }];
    });
    event.currentTarget.reset();
  };

  // todoリスト確認用
  console.log(todos);

  return (
    <div>
      <TodoHeaderRecoil />
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default AddRecoil;
