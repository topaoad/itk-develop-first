import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";

type gitColorProps = {
  gitLanguageColor: string;
};

export const GitColor = (props: gitColorProps): ReactJSXElement => {
  const gitLanguageColor = props.gitLanguageColor;
  let githubColorItem: string = "";

  // 言語ごとに戻すクラス名を振り分ける
  switch (gitLanguageColor) {
    case "TypeScript":
      githubColorItem = "github-coloritem--typescript";
      break;
    case "JavaScript":
      githubColorItem = "github-coloritem--javascript";
      break;
    case "HTML":
      githubColorItem = "github-coloritem--html";
      break;
    case "SCSS":
      githubColorItem = "github-coloritem--scss";
      break;
    case "CSS":
      githubColorItem = "github-coloritem--css";
      break;

    default:
     githubColorItem = "github-coloritem--other";
  }

    return <div className={`github-coloritem mr-2 ${githubColorItem}`}></div>;
};
