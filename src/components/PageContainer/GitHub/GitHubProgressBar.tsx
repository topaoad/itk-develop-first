import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { JSXElementConstructor } from "react";

type gitHubProgressBar = {
  gitHubLanguageTotal: number;
  gitLanguage: string;
  gitLanguageCount: number;
  key: number;
};

// export const GitProgressColor = (props: gitProgressColorProps): string => {

export const GitHubProgressBar = (
  props: gitHubProgressBar
): ReactJSXElement => {
  const{gitLanguage,gitHubLanguageTotal, gitLanguageCount,key }={...props}
  
  const gitLanguagePercentage:number = Math.round(
    (gitLanguageCount / gitHubLanguageTotal) * 100
  );

  let githubColorItem: string = "";
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
      className={`bg-blue-600  ${githubColorItem}`}
      style={{ width: gitLanguagePercentage+"%" }}
    ></li>
  );
};
