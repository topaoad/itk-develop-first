import React from "react";
import { Button, Image, Progress } from "@mantine/core";
import { useGitHub } from "src/hooks/useGitHub";
import { GitHubRepository } from "src/types/github";

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
                  <div className="text-gray-500">{gitHubRepository.stargazers_count}</div>
                  <div  className="ml-3 ">
                    <Image
                      src="/assets/img/Fork.png"
                      // height={184}
                      alt="fork"
                      width="18px"
                      height="18px"
                      className="mr-2 "
                    />
                  </div>
                  <div className="text-gray-500">{gitHubRepository.forks_count}</div>
                </div>
                <Progress
                  size="md"
                  className=" mt-2"
                  sections={[
                    { value: 65.5, color: "#3178C6" },
                    { value: 33.7, color: "#F1E05A" },
                    { value: 0.8, color: "#EDEDED" },
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
            ))}
        </ul>

        <div className="mt-6 ">
          <Button className="font-semibold button-style">View on GitHub</Button>
        </div>
      </div>
    </div>
  );
}
