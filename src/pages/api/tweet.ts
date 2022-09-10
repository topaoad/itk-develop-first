import type { NextApiRequest, NextApiResponse } from "next";
import type {
  TwitterResponse,
  usersIdTweets,
  findUserByUsername,
} from "twitter-api-sdk/dist/types";

import { Client } from "twitter-api-sdk";

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<{
    user: TwitterResponse<findUserByUsername>["data"];
    tweets: TwitterResponse<usersIdTweets>["data"];
  }>
) => {
  const client = new Client(process.env.BEARER_TOKEN);
  const { data: user } = await client.users.findUserByUsername("tktoproad", {
    "user.fields": ["profile_image_url"],
  });
  if (!user) {
    return;
  }
  
  const { data: tweets } = await client.tweets.usersIdTweets(user.id, {
    "tweet.fields": ["author_id", "created_at","attachments"],
    max_results: 30,
  });
  if (!tweets) {
    return;
  }
  res.status(200).json({ user, tweets });
  // console.log(user);
  // console.log(tweets);
};

export default handler;
