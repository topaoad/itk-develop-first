import { Octokit } from "@octokit/core";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  });

  const owner = "topaoad"; // 所有者=ログインユーザー(ユーザー/組織)
  const id = "79026581"; // id※リポジトリ一覧表示の際に取得
  const repo = "itk-develop-first"; // リポジトリ
  const branch = "main"; // ブランチ

  const repository = await octokit.request("GET /users/topaoad/repos", {
    per_page: "5",
    sort: "updated",
  });
  if (!repository) {
    return;
  }

  return res.status(200).json({ repository });
};

export default handler;
