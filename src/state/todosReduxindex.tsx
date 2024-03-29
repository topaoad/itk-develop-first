import { combineReducers, legacy_createStore } from "redux";

import { todosReducer } from "./todosRedux";

export const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
