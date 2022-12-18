import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "src/types/todo";

const initialState: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// createSliceは、初期状態、レデューサー関数のオブジェクト、「スライス名」を受け取り、レデューサーと状態に対応するアクションクリエーターとアクションタイプを自動生成する関数。
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
      });
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export const todosReducerTk = todosSlice.reducer;
