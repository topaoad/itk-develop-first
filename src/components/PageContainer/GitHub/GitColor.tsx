import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type gitLanguageProps = {
  gitLanguage: string;
};

//使用言語名を受け取って色分け用のクラスを振り分ける関数
export const GitColor = (props: gitLanguageProps): ReactJSXElement => {
  const gitLanguage = props.gitLanguage;
  let githubColorItem = "";

  // 言語ごとに戻すクラス名を振り分ける
  switch (gitLanguage) {
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
