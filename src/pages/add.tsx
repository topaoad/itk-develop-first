import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoHeader } from "src/components/TodoHeader";
import { addTodo } from "src/state/todosRedux";
import { RootState } from "src/state/todosReduxindex";

const Add: NextPage = () => {
  const dispatch = useDispatch();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    dispatch(addTodo(text));
    event.currentTarget.reset();
  };

  const todos = useSelector((state: RootState) => state.todos);
  // todoリスト確認用
  console.log(todos);

  return (
    <div>
      <TodoHeader />
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
