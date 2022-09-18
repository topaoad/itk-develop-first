import useSWR from "swr";


// 各コンポーネントにtwitterデータを渡すための処理
export const useGitHub = () => {

  const fetcher = async (url:string) => {
    const res = await fetch(url);
    const swrData = await res.json();
    return swrData;
  };

  const { data, error } = useSWR("/api/github");

  console.log(data);
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
