import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";

export type Numbers = {
  totalCount: number;
};

export const Pagination = ({ totalCount }: Numbers): ReactJSXElement => {
  const PER_PAGE = 5;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const range = (start: number, end: number) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };
  console.log(Math.ceil(totalCount / PER_PAGE));

  return (
    <ul className="flex items-center justify-center -space-x-px my-5 mx-auto pagination-list">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/mainblog/page/${number}`}>
            <a className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-md border border-gray-400 hover:bg-gray-900 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {number}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
