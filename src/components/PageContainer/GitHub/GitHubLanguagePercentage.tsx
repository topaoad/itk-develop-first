import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

// 各言語の割合を表示するため、使用言語の数と全ての使用言語の合計を取得
type GitHubLanguagePercentageProps = {
  gitHubLanguageCount: number; //使用言語の数
  gitHubLanguageTotal: number; //全ての使用言語の合計
};

// 全ての使用言語の総数をカウントし、div要素内の表示として返す関数
export const GitHubLanguagePercentage = (
  props: GitHubLanguagePercentageProps
): ReactJSXElement => {
  const { gitHubLanguageCount, gitHubLanguageTotal } = props;

  const gitLanguagePercentage =
    (gitHubLanguageCount / gitHubLanguageTotal) * 100;
  const gitLanguagePercentageRound = gitLanguagePercentage.toFixed(1);

  return <div>{`${gitLanguagePercentageRound}%`}</div>;
};
