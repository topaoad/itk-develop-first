import React from "react";
import { Button, Image, Progress } from "@mantine/core";
import { useGitHub } from "src/hooks/useGitHub";
import { GitHubRepository } from "src/types/github";
import useSWR from "swr";

export function GitHub() {
  const { data, error, isLoading } = useGitHub();
  const gitHubRepositories: Array<GitHubRepository> = data?.repository.data;
  console.log(gitHubRepositories);

  //配列型のgitHubRepositoriesをオブジェクトに入れる。

  // 順番
  // 各コンポのlanguages_url
  const useGitLanguage = () => {
    const fetcher = async (url: string) => {
      const res = await fetch(url);
      const swrData = await res.json();
      return swrData;
    };

    //gitHubLanguagesUrlは最終的に引数でもらう、
    let gitHubLanguagesUrl: string = "";
    if (gitHubRepositories) {
      gitHubLanguagesUrl = gitHubRepositories[0].languages_url;
    }
    const { data, error } = useSWR(gitHubLanguagesUrl,fetcher);

    console.log(data);
    //オブジェクトの要素数を取得
    if (data) {
      console.log(Object.keys(data).length);
    }

    return {
      data,
      error,
      isLoading: !data && !error,
    };
  };

  const  props  = useGitLanguage();
  const { data: gitLanguages, error: giteror, isLoading: gitLoading } = props;
  console.log(gitLanguages);

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

                {/* 以下、language＿urlを渡して別処理のがよさそう。。 */}
                <Progress
                  size="md"
                  className=" mt-2"
                  sections={[
                    { value: 95, color: "#3178C6" },
                    { value: 3, color: "#F1E05A" },
                    { value: 2, color: "#EDEDED" },
                  ]}
                />
                <div className="  flex flex-wrap">
                  <div className="mr-4 mt-2 flex items-center">
                    <div className="github-coloritem mr-2"></div>
                    <div className=" mr-2 font-bold">TypeScript</div>
                    <div>65.5%</div>
                  </div>

                  <div className="  mr-4 mt-2 flex items-center">
                    <div className="github-coloritem--yellow mr-2"></div>
                    <div className=" mr-2 font-bold">JavaScript</div>
                    <div>33.7%</div>
                  </div>
                  <div className=" mt-2 flex items-center">
                    <div className="github-coloritem--white mr-2"></div>
                    <div className=" mr-2 font-bold">Other</div>
                    <div>33.7%</div>
                  </div>
                </div>
              </li>
              // ここまで
            ))}
        </ul>

        <div className="mt-6 ">
          <Button className="font-semibold button-style">View on GitHub</Button>
        </div>
      </div>
    </div>
  );
}
