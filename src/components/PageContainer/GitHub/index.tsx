import { gql, useQuery } from "@apollo/client";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Button, Image } from "@mantine/core";
import Link from "next/link";
import React from "react";
import {
  useGitHub,
  useGitHubLanguageTotal,
  useGitLanguage,
} from "src/hooks/useGitHub";
import { GitHubRepository } from "src/types/github";
import { UseGitHubInfoQuery } from "src/types/githubGraphQL";

import { GitColor } from "./GitColor";
import { GitHubLanguagePercentage } from "./GitHubLanguagePercentage";
import { GitHubProgress } from "./GitHubProgress";

type GitHubLanguageProps = {
  gitHubLanguagesUrl: string;
};

const GET_LOCATIONS = gql`
  query UseGitHubInfo {
    user(login: "topaoad") {
      name
      url
      repositories(last: 5, orderBy: { field: UPDATED_AT, direction: ASC }) {
        totalCount
        nodes {
          name
          description
          createdAt
          updatedAt
          url
          forkCount
          stargazerCount
          languages(orderBy: { field: SIZE, direction: DESC }, last: 10) {
            totalCount
            totalSize
            edges {
              node {
                id
                name
                color
              }
              size
            }
          }
        }
      }
    }
  }
`;

export type GitLanguageArray = [string, number];

// GitHub関数内のmap関数から一つずつリポジトリのgitHubLanguagesUrlをもらって実装を行う関数
// プログレスバー、色、パーセンテージ表示は更にそれぞれの関数に外注
const GitHubLanguage = (props: GitHubLanguageProps): ReactJSXElement => {
  const gitHubLanguagesUrl: string = props.gitHubLanguagesUrl;
  // 引き継いだgitHubLanguagesUrlでフェッチして、言語オブジェクトを取得
  const gitLanguageObjects = useGitLanguage(gitHubLanguagesUrl);
  console.log(gitLanguageObjects.data);

  const gitHubLanguageTotal = useGitHubLanguageTotal(gitLanguageObjects.data);
  console.log(gitHubLanguageTotal);

  // URLから取得した言語オブジェクトを配列化する
  let gitLanguageArray: Array<GitLanguageArray> = [];
  if (gitLanguageObjects.data) {
    // オブジェクトを配列に格納
    gitLanguageArray = Object.entries(gitLanguageObjects.data);
  }
  console.log(gitLanguageArray);

  return (
    <>
      <GitHubProgress
        gitLanguageArray={gitLanguageArray}
        gitHubLanguageTotal={gitHubLanguageTotal}
      />
      <ul className="  flex flex-wrap">
        {gitLanguageArray.map((gitLanguage: any, index: number) => (
          <li key={index} className="mr-4 mt-2 flex items-center">
            <GitColor gitLanguage={gitLanguage[0]} />
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
// Rest APIで取得したVer
  const { data, error, isLoading } = useGitHub();
  const gitHubRepositories: Array<GitHubRepository> = data?.repository.data;
  console.log(gitHubRepositories);

  // GraphQL APIで取得したVer
  const {
    data: dataApollo,
    error: errorApollo,
    loading: loadingApollo,
  } = useQuery<UseGitHubInfoQuery>(GET_LOCATIONS);
  console.log(dataApollo?.user?.repositories.nodes);

  // 実装はRest APIの取得データで行っています。
  // Language情報が沢山取れる分、GraphQLで取得したデータの方が汎用性が高いです。  
  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">GitHub</h2>
      <div className="mt-5 blog-box">
        <ul>
          {gitHubRepositories
            ?.slice(0, 5)
            .map((gitHubRepository: GitHubRepository, index: number) => (
              <Link key={index} href={gitHubRepository.html_url} passHref>
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
              </Link>
            ))}
        </ul>

        <div className="mt-6 ">
          <Link href="https://github.com/topaoad/" passHref>
            <Button className="font-semibold button-style">
              View on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
