import { UseGitHubInfoQuery } from "src/types/githubGraphQL";
import useSWR from "swr";

// api/githubからリポジトリを取得するhook
export const useGitHub = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const swrData = await res.json();
    return swrData;
  };

  const { data, error } = useSWR("/api/github", fetcher);
  console.log(data);

  // こちらはGraphQLで取得したデータ。こちらのdataは現時点でany
  const { data: dataql, error: errprql } = useSWR<UseGitHubInfoQuery, boolean>(
    "/api/githubgraphql",
    fetcher
  );

  // codegenで生成した型で定義
  // console.log(dataql?.user?.repositories);
  console.log(dataql);

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

// 全言語の合計数をオブジェクトから取得
export const useGitHubLanguageTotal = (gitLanguageObjectsData: object) => {
  let aaa: number[] = [];
  if (gitLanguageObjectsData) {
    aaa = Object.values(gitLanguageObjectsData);
    console.log(Object.values(aaa));
  }
  const gitLanguageTotal = aaa.reduce((sum, element) => sum + element, 0);
  console.log(gitLanguageTotal);

  return gitLanguageTotal;
};
