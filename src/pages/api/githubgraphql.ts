import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  });

  // const owner = "topaoad"; // 所有者(ユーザー/組織)
  // const repo = "itk-develop-first"; // リポジトリ
  // const branch = "main"; // ブランチ

  // // const latestCommit = (
  // //   await octokit.rest.repos.getBranch({ owner, repo, branch })
  // // ).data.commit;

  // // console.log(latestCommit);

  // const repository = await octokit.request("https://api.github.com/graphql", {
  //   sort:"created",
  //   per_page:"5"
  // });
  // if (!repository) {
  //   return;
  // }

  // res.status(200).json({ repository });
  // console.log(repository);
};

export default handler;
