import type { NextApiRequest, NextApiResponse } from "next";
import type {
  TwitterResponse,
  usersIdTweets,
  findUserByUsername,
} from "twitter-api-sdk/dist/types";

import { Client } from "twitter-api-sdk";
import NextCors from "nextjs-cors";

// export default async function getTweet(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {


// const handler = async (
//   _req: NextApiRequest,
//   res: NextApiResponse
// ) => {
//   const client = new Client(process.env.BEARER_TOKEN);
//   const { data: user } = await client.users.findUserByUsername("tktoproad", {
//     "user.fields": ["profile_image_url"],
//   });
//   if (!user) {
//     return;
//   }

//   const { data: tweets } = await client.tweets.usersIdTweets(user.id, {
//     "tweet.fields": ["author_id", "created_at","attachments"],
//     max_results: 30,
//   });
//   if (!tweets) {
//     return;
//   }
//   res.status(200).json({ user, tweets });
//   console.log(user);
//   console.log(tweets);
// };

async function handler(req: NextApiRequest,res: NextApiResponse) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET"],
    origin: "*",
    optionSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const client = new Client(process.env.BEARER_TOKEN);
  const { data: user } = await client.users.findUserByUsername("tktoproad", {
    "user.fields": ["profile_image_url"],
  });
  if (!user) {
    return;
  }

  const { data: tweets } = await client.tweets.usersIdTweets(user.id, {
    "tweet.fields": ["author_id", "created_at", "attachments"],
    max_results: 30,
  });
  if (!tweets) {
    return;
  }
  res.status(200).json({ user, tweets });
  console.log(user);
  console.log(tweets);

}

export default handler;
