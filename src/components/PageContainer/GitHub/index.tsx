import React from "react";
import { Button, Image, Progress } from "@mantine/core";
import {
  useGitHub,
  useGitLanguage,
  useGitHubLanguageTotal,

} from "src/hooks/useGitHub";
import { GitHubRepository } from "src/types/github";
import { GitColor } from "./GitColor";
import { GitHubLanguagePercentage } from "./GitHubLanguagePercentage";

import useSWR from "swr";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type GitHubLanguageProps = {
  gitHubLanguagesUrl: string;
};

// GitHubコンポーネント内から一つのリポジトリのgitHubLanguagesUrlをもらって実装を行う関数
const GitHubLanguage = (props: GitHubLanguageProps): ReactJSXElement => {
  const gitHubLanguagesUrl: string = props.gitHubLanguagesUrl;
  // 引き継いだgitHubLanguagesUrlでフェッチして、言語オブジェクトを取得
  const gitLanguageObjects = useGitLanguage(gitHubLanguagesUrl);
  console.log(gitLanguageObjects.data);

  const gitHubLanguageTotal = useGitHubLanguageTotal(gitLanguageObjects.data);
  console.log(gitHubLanguageTotal);

  // URLから取得した言語オブジェクトを配列化する
  let gitLanguageArray: object[] = [];
  if (gitLanguageObjects.data) {
    // オブジェクトを配列に格納
    gitLanguageArray = Object.entries(gitLanguageObjects.data);
  }
  console.log(gitLanguageArray);
  

  return (
    <>
      <Progress
        size="md"
        className=" mt-2"
        sections={[
          // ここもオブジェクトの数側で処理
          { value: 95, color: "#3178C6" },
          { value: 3, color: "#F1E05A" },
          { value: 2, color: "#EDEDED" },
        ]}
      />
      <ul className="  flex flex-wrap">
        {gitLanguageArray.map((gitLanguage: any, index: number) => (
          <li key={index} className="mr-4 mt-2 flex items-center">
            <GitColor gitLanguageColor={gitLanguage[0]} />
            <div className=" mr-2 font-bold">{gitLanguage[0]}</div>        
              <GitHubLanguagePercentage
                gitHubLanguageTotal={gitHubLanguageTotal} 
                gitHubLanguageCount={gitLanguage[1]} 
              />   
          </li>
        ))}
      </ul>
    </>
  );
};

// 以下デフォルトの関数領域
export function GitHub() {
  const { data, error, isLoading } = useGitHub();
  const gitHubRepositories: Array<GitHubRepository> = data?.repository.data;
  console.log(gitHubRepositories);

  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">GitHub</h2>
      <div className="mt-5 blog-box">
        <ul>
          {gitHubRepositories
            ?.slice(0, 5)
            .map((gitHubRepository: GitHubRepository, index: number) => (
              <li key={index} className="mt-6 ">
                <p className="text-2xl font-bold">
                  {gitHubRepository.description}
                </p>
                <p className="text-base mt-2">Next.js starter template.</p>
                <div className="flex mt-2 items-center">
                  <Image
                    src="/assets/img/Star.png"
                    // height={184}
                    alt="star"
                    width="18px"
                    height="18px"
                    className="mr-2 "
                  />
                  <div className="text-gray-500">
                    {gitHubRepository.stargazers_count}
                  </div>
                  <div className="ml-3 ">
                    <Image
                      src="/assets/img/Fork.png"
                      // height={184}
                      alt="fork"
                      width="18px"
                      height="18px"
                      className="mr-2 "
                    />
                  </div>
                  <div className="text-gray-500">
                    {gitHubRepository.forks_count}
                  </div>
                </div>
                <GitHubLanguage
                  gitHubLanguagesUrl={gitHubRepository.languages_url}
                />
              </li>
            ))}
        </ul>

        <div className="mt-6 ">
          <Button className="font-semibold button-style">View on GitHub</Button>
        </div>
      </div>
    </div>
  );
}
