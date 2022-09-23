import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";

type gitHubProgressBar = {
  gitHubLanguageTotal: number;
  gitLanguage: string;
  gitLanguageCount: number;
  key: number;
};

// 使用言語名、使用言語数、全ての使用言語総合計、リスト用のキーを受け取って処理を回す関数
export const GitHubProgressBar = (
  props: gitHubProgressBar
): ReactJSXElement => {
  const { gitHubLanguageTotal, gitLanguage, gitLanguageCount, key } = {
    ...props,
  };

  const gitLanguagePercentage: number = Math.round(
    (gitLanguageCount / gitHubLanguageTotal) * 100
  );

  let githubColorItem = "";
  // 言語ごとに戻すクラス名を振り分ける
  switch (gitLanguage) {
    case "TypeScript":
      githubColorItem = "github-progresscolor--typescript";
      break;
    case "JavaScript":
      githubColorItem = "github-progresscolor--javascript";
      break;
    case "HTML":
      githubColorItem = "github-progresscolor--html";
      break;
    case "SCSS":
      githubColorItem = "github-progresscolor--scss";
      break;
    case "CSS":
      githubColorItem = "github-progresscolor--css";
      break;

    default:
      githubColorItem = "github-progresscolor--other";
  }

  return (
    <li
      key={key}
      className={`${githubColorItem}`}
      style={{ width: gitLanguagePercentage + "%" }}
    ></li>
  );
};
