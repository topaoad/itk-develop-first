import React from "react";
import { Button, Avatar, Loader, Center } from "@mantine/core";
import { useTwitterData } from "src/hooks/useTwitterUser";
import { twitterUser, twitterTweets } from "src/types/twitter";
import { formatPublishedAt } from "./PortFolio";
import Link from "next/link";

export function Twitter() {

  const { data, error, isLoading } = useTwitterData();
  const usersObject: twitterUser = data?.user;
  const tweetsArray: Array<twitterTweets> = data?.tweets;
  console.log(usersObject);
  console.log(tweetsArray);

  if (isLoading) {
    return (
      <div className="mmd:mt-20 mt-30" >
        <Center style={{ height: 200 }}>
          <Loader />
        </Center>
      </div>
    );
  }

  if (error) {
    return <div>データが正しく取得できていません</div>;
  }


  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Twitter</h2>
      <div className="mt-5 blog-box">
        <ul>
          {tweetsArray
            ?.slice(0, 5)
            .map((twitterData: twitterTweets, index: number) => (
              <li key={index} className="mt-6 ">
                <Link
                  href={`https://twitter.com/${usersObject.username}/status/${twitterData.id}`}
                  passHref
                  // エンティティを使ったリンクを実装したいが、エラー中
                  // href={twitterData.entities.urls.expanded_url}
                >
                  <div className="flex mt-2">
                    <Avatar
                      className="mr-4  "
                      src={usersObject?.profile_image_url}
                      alt="とっぷのアイコン"
                    />
                    <div>
                      <div className="mr-4 flex items-center">
                        <div className="mr-2">{usersObject.name}</div>
                        <div className="  font-bold  text-xs font-color-dark2">
                          {`@${usersObject.username}　 `}
                          {formatPublishedAt(twitterData.created_at)}
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
          <Link href={`https://twitter.com/${usersObject?.username}`} passHref>
            <Button className="font-semibold button-style">
              View on Twitter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
