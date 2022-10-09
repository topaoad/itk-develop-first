import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

import { GitLanguageArray } from "./index.hsx";
import { GitHubProgressBar } from "./GitHubProgressBar";

// 各言語の割合を表示する
type GitHubLanguageProgressProps = {
  gitHubLanguageTotal: number;
  gitLanguageArray: Array<GitLanguageArray>;
};

//プログレスバーの実装。mantineをあきらめてtailwindを使用
// 実装はGitHubProgressBar関数に外注
export const GitHubProgress = (props: GitHubLanguageProgressProps) => {
  const { gitHubLanguageTotal, gitLanguageArray } = props;

  return (
    <ul className="flex w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      {gitLanguageArray.map(
        (gitLanguage: GitLanguageArray, index: number): ReactJSXElement => (
          <GitHubProgressBar
            gitLanguage={gitLanguage[0]}
            gitLanguageCount={gitLanguage[1]}
            gitHubLanguageTotal={gitHubLanguageTotal}
            key={index}
          />
        )
      )}
    </ul>
  );
};
