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
    }).then((res) => res.json());

  const { data: data, error } = useSWR(url, fetcher);
 
  return { data, error };
};
