import Link from "next/link";
import { FC } from "react";

import { TodoReduxCounter } from "./TodoReduxCounter";

// <Link href = "/redux ">
// <Link href="/add">
export const TodoHeader: FC = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <Link href="/redux-toolkit ">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add-tk">
          <a>TODO追加</a>
        </Link>
      </nav>

      <TodoReduxCounter />
    </header>
  );
};
