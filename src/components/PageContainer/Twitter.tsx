import React from "react";
import { Button, Avatar } from "@mantine/core";
import { useTwitterData } from "src/hooks/useTwitterUser";
import { twitterUser, twitterTweets } from "src/types/twitter";
import Link from "next/link";

export function Twitter() {
  const { data, error, isLoading } = useTwitterData();
  const usersObject: twitterUser = data?.user;
  const tweetsArray: Array<twitterTweets> = data?.tweets;
  console.log(usersObject);
  console.log(data);

  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Twitter</h2>
      <div className="mt-5 blog-box">
        <ul>
          {tweetsArray
            ?.slice(0, 5)
            .map((twitterData: twitterTweets, index: number) => (
              <li key={index} className="mt-6 ">
                <Link href={`https://twitter.com/${usersObject.username}/status/${twitterData.id}`}>
                  <div className="flex mt-2">
                    <Avatar
                      className="mr-4  "
                      src={usersObject?.profile_image_url}
                      alt="しまぶー画像"
                    />
                    <div>
                      <div className="mr-4 mt-2 flex items-center">
                        <div className="mr-2">{usersObject.name}</div>
                        <div className="  font-bold  text-xs font-color-dark2">
                          {`@${usersObject.username}`}
                        </div>
                      </div>
                      <p className="">{twitterData.text}</p>
                    </div>
                  </div>
                </Link>
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
