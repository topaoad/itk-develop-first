import Link from "next/link";
import { FC } from "react";

import { TodoRecoilCounter } from "./TodoRecoilCounter";

// <Link href = "/redux ">
// <Link href="/add">
export const TodoHeaderRecoil: FC = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <Link href="/recoil">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add-recoil">
          <a>TODO追加</a>
        </Link>
      </nav>

      <TodoRecoilCounter />
    </header>
  );
};
