import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/todosReduxindex";

export const TodoReduxCounter: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return <h2>TODO: {todos.length}件</h2>;
};