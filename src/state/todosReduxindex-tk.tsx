// import { combineReducers, legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { todosReducerTk } from "./todosRedux-tk";

export const store = configureStore({
  reducer: {
    todos: todosReducerTk,
  },
});

export type RootState = ReturnType<typeof store.getState>;
