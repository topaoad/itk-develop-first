import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Progress } from "@mantine/core";
import { GitHubLanguagePercentage } from "./GitHubLanguagePercentage";
import { GitHubProgressBar } from "./GitHubProgressBar";

// 各言語の割合を表示する
type GitHubLanguageProgressProps = {
  gitHubLanguageTotal: number;
  gitLanguageArray: object[];
};

//プログレスバーの実装。mantineをあきらめてtailwindを使用
export const GitHubProgress = (props: GitHubLanguageProgressProps) => {
  const { gitLanguageArray, gitHubLanguageTotal } = props;

  return (
    <ul className="flex w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      {gitLanguageArray.map((gitLanguage:any, index: number):ReactJSXElement => (
        <GitHubProgressBar
          gitLanguage={gitLanguage[0]}
          gitLanguageCount={gitLanguage[1]}
          gitHubLanguageTotal={gitHubLanguageTotal}
          key={index}
        />
      ))}
    </ul>
  );
};

