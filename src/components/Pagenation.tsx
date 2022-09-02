import Router from "next/router";
import Link from "next/link";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export type Numbers = {
  totalCount: number;
};

export const Pagination = ( {totalCount}: Numbers): ReactJSXElement => {
  const PER_PAGE = 5;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  console.log(Math.ceil(totalCount / PER_PAGE));

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/mainblog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
