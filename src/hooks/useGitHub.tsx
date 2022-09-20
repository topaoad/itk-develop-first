import useSWR from "swr";

// 各コンポーネントにtwitterデータを渡すための処理
export const useGitHub = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const swrData = await res.json();
    return swrData;
  };

  const { data, error } = useSWR("/api/github", fetcher);

  console.log(data);
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

// GitHubLanguageからgitHubLanguagesUrlをもらってフェッチを実行するフック
export const useGitLanguage = (gitHubLanguagesUrl: string) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const swrData = await res.json();
    return swrData;
  };

  const { data, error } = useSWR(gitHubLanguagesUrl, fetcher);
  console.log(data);
  //オブジェクトの要素数を取得
  if (data) {
    console.log(Object.keys(data).length);
  }
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
