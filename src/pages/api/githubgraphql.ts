import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  });

  const owner = "topaoad"; // 所有者=ログインユーザー(ユーザー/組織)
  const id = "79026581"; // id※リポジトリ一覧表示の際に取得
  const repo = "itk-develop-first"; // リポジトリ
  const branch = "main"; // ブランチ

  const QUERY = `query{
    user(login: "topaoad") {
      name
      url
      repositories(last: 5, orderBy: {field: UPDATED_AT, direction: ASC}) {
        totalCount
        nodes {
          name
          description
          createdAt
          updatedAt
          url
        }
      }
    }
  }
`;

  const repository = await octokit.graphql(QUERY);

  if (!repository) {
    return;
  }

  return res.status(200).json({ repository });
  // console.log(repository);
};

export default handler;
