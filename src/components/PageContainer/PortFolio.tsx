import Link from "next/link";
import React from "react";
import { Card, Image, Text, Button, Group, AspectRatio } from "@mantine/core";
// import { portfolioPortfolioProps,PortfolioArticle } from "src/types/microCmsData";
import { SubProps } from "src/pages";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function PortFolio({ portfolio }: SubProps) {
  const formatPublishedAt = (pa: string) => {
    console.log(pa);
    return dayjs.utc(pa).tz("Asia/Tokyo").format("YYYY.MM.DD");
  };
  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">PortFolio</h2>
      <div className="mt-5 portfolio-box">
        <div>
          <ul className="mt-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolio.map((portfolio, index) => (
              <li key={portfolio.id} className="mt-6 ">
                <Link href={portfolio.url} passHref>
                  <Card shadow="sm" p="lg" withBorder className="rounded-sm">
                    <Card.Section>
                      <Image
                        src={portfolio.eyecatch.url}
                        height={200}
                        alt="sin国王"
                      />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Text weight={700} className=" text-2xl ">
                        {portfolio.title}
                      </Text>
                    </Group>

                    {/* <div
                      className="text-base mt-2"
                      dangerouslySetInnerHTML={{
                        __html: `${portfolio.contents}`,
                      }}
                    /> */}

                    <Text weight={400} className="   " lineClamp={3} size={18}>
                      {portfolio.contents}
                    </Text>

                    <div className="  mt-2 text-xs font-bold">
                      {formatPublishedAt(portfolio.publishedAt)}
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 ">
          <Link href="/portfolio" passHref>
            <Button className="font-semibold button-style">View All</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
