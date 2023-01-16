import { proxy } from "valtio";
import { FC } from "react";
import { useSnapshot } from "valtio";

export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

export const store = proxy<{ todos: Todo[] }>({
  todos: [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ],
});

export const toggleIsDone = (id: Todo["id"]) => {
  // 状態管理のstoreを直接書き換えることが可能
  store.todos.forEach((todo) => {
    if (todo.id === id) {
      todo.isDone = !todo.isDone;
    }
  });
};

export const TodoCounter: FC = () => {
  const { todos } = useSnapshot(store);
  return <h2>TODO: {todos.length}件</h2>;
};

export const addTodo = (text: string) => {
  store.todos.push({ id: store.todos.length + 1, text, isDone: false });
};
