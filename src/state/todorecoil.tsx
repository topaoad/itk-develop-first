import { atom, selector } from "recoil";
import { Todo } from "src/types/todo";

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ],
});

// 文字列の長さを用いるため、以下のようにセレクターを設定
export const todosLengthState = selector({
  key: "todosLengthState",
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.length;
  },
});