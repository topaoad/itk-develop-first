import { client } from "src/lib/miscrocms/client";
import type { Article } from "src/types/article";
import useSWRInfinite from "swr/infinite";
import { SWRInfiniteKeyLoader } from "swr/infinite";

const fetcher = async (key: string) => {
  const [endpoint, pageStr] = key.split("/");
  const page = Number(pageStr);
  const countPage = 5;
  const data = await client.get({
    endpoint,
    queries: {
      limit: countPage,
      offset: countPage * (page - 1),
      orders: "-publishedAt",
    },
  });
  return data.contents;
};

const getKey: SWRInfiniteKeyLoader = (index, previousPageData) => {
  return `mainblog/${index + 1}`;
};

export const useRequestBlog = (initialData: Article[]) => {
  const { data, error, isValidating, mutate, setSize, size } = useSWRInfinite(
    getKey,
    fetcher,
    { fallbackData: initialData }
  );

  const items = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = data?.slice(-1)[0]?.length === 0;

  return {
    error,
    isLoadingMore,
    isReachingEnd,
    isValidating,
    items,
    mutate,
    setSize,
    size,
  };
};
