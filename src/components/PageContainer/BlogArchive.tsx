import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import Link from "next/link";
import React from "react";
import { Props } from "src/pages";

dayjs.extend(utc);
dayjs.extend(timezone);

export const BlogArchive = ({ blog }: Props) => {
  const formatPublishedAt = (pa: string) => {
    console.log(pa);
    return dayjs.utc(pa).tz("Asia/Tokyo").format("YYYY.MM.DD");
  };

  return (
    <div className="md:mt-10 mt-20">
      <h2 className="sub-title">Blog</h2>
      <div className="mt-5 blog-box">
        <div>
          <ul>
            {blog.map((blog, index) => (
              <li key={blog.id} className="mt-6 ">
                <Link href={`/mainblog/${blog.id}`}>
                  <a>
                    <h3 className="text-2xl font-bold">{blog.title}</h3>
                    <div
                      className="text-base mt-2"
                      dangerouslySetInnerHTML={{
                        __html: `${blog.body}`,
                      }}
                    />
                    <p> {formatPublishedAt(blog.publishedAt)} </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
