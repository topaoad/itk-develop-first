import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

// 各言語の割合を表示する
type GitHubLanguagePercentageProps = {
  gitHubLanguageTotal: number;
  gitHubLanguageCount: number;
};

export const GitHubLanguagePercentage = (
  props: GitHubLanguagePercentageProps
): ReactJSXElement => {
  const { gitHubLanguageTotal, gitHubLanguageCount } = props;

  const gitLanguagePercentage = Math.round(
    (gitHubLanguageCount / gitHubLanguageTotal) * 100
  );

  return <div>{`${gitLanguagePercentage}%`}</div>;
};
