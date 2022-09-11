import React from "react";
import { Button, Avatar } from "@mantine/core";
import useSWR from "swr";
import { useTwitterUser, useTwitterData } from "src/hooks/useTwitterUser";
import type {
  TwitterResponse,
  usersIdTweets,
  findUserByUsername,
} from "twitter-api-sdk/dist/types";
import { TweetSearchAllV2Paginator } from "twitter-api-v2";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const swrData = await res.json();
  return swrData;
};

export function Twitter() {
  const { data, error } = useSWR<{
    user: TwitterResponse<findUserByUsername>["data"];
    tweets: TwitterResponse<usersIdTweets>["data"];
  }>(`/api/tweet`, fetcher);

  const usersObject = data?.user;
  const tweetsArray = data?.tweets;

  console.log(usersObject);
  console.log(data);

  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Twitter</h2>
      <div className="mt-5 blog-box">
        <ul>
          {tweetsArray?.slice(0, 5).map((twitterData: any, index: number) => (
            <li key={index} className="mt-6 ">
              <div className="flex mt-2">
                <Avatar
                  className="mr-4  "
                  src={usersObject?.profile_image_url}
                  alt="しまぶー画像"
                />
                <div className="  ">
                  <div>
                    <div className="mr-4 mt-2 flex items-center">
                      <div className="mr-2">しまぶーのIT大学</div>
                      <div className="  font-bold  text-xs font-color-dark2">
                        @shimabu_it・5月25日
                        {twitterData.author_id}
                      </div>
                    </div>
                    <p className="">{twitterData.text}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 ">
          <Button className="font-semibold button-style">
            View on Twitter
          </Button>
        </div>
      </div>
    </div>
  );
}
