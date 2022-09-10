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

  // const  { users, tweets } = useTwitterUser();
  // // これはOK
  // console.log( users);
  // console.log( tweets[0]);

  // const { data, error, isLoading } = useTwitterData();
  // これはOK
  // if (data && data.user) {
  //   console.log(data.user);
  //   const userObject: {} = data.user;
  // }

  // let tweetsArray=[];
  // if (data && data.tweets) {
  //   console.log(data.tweets);
  //   tweetsArray = data.tweets;
  // }
  const usersObject = data?.user;
  const tweetsArray = data?.tweets;
  // if (data && data.tweets) {
    console.log(usersObject);
  //  const tweetsArray:Object[] = data.tweets;
  // }
  console.log(data);

  // if (data) {
  //   const userObject: {} = data.user;
  //   const userArray: [] = data.tweets;
  // }

  // これはNG
  // console.log(userObject);
  // console.log(userArray);
  // // console.log( data.tweets[0]);
  // const my_profile_image_url: string|undefined = usersObject?.profile_image_url;
  
  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Twitter</h2>
      <div className="mt-5 blog-box">
        <ul>
          {tweetsArray?.map((twitterData: any, index: number) => (
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
