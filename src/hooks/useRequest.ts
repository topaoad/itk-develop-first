// import useSWR, { useSWRInfinite } from "swr";
import useSWR from "swr";

export const useGetPosts = () => {
  const url = "https://top-blog.microcms.io/api/v1/mainblog";
  const fetcher = (url: string) =>
    fetch(url, {
      method: "GET",
      headers: {
        "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
      } as HeadersInit | undefined,
    } as object).then((res) => res.json());

  const { data, error } = useSWR(url, fetcher);
  console.log(data);

  let dataArray = [];
  if (data) {
    for (let i = 0; i < data.contents.length; i++) {
      dataArray.push(data.contents[i]);
    }
  }

  return {
    user: dataArray,
    isLoading: !error && !data,
    isError: error,
  };
};
