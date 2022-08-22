import React from "react";
import Link from "next/link";

export function BlogArchive({ blog }) {
  const linkItem = ({blog}) => {
    return (
      <a>
        {blog.title}
        <div>{blog.body}</div>
      </a>
    );
  };

  return (
    <div className="md:mt-10 mt-20">
      <h2 className="sub-title">Blog</h2>
      <div className="mt-5 blog-box">
        <div className="mt-6 ">
          <h3 className="text-2xl font-bold">This is a header</h3>
          <p className="text-base mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <time className="text-xs mt-2">2022.07.11</time>
        </div>

        <div>
          <ul>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/mainblog/${blog.id}`}>
                <a>
        {blog.title}
        {/* {blog.body}
        {blog.sub} */}
      </a>
                </Link>
              

                <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
     
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="mt-6 ">
          <h3 className="text-2xl font-bold">This is a header</h3>
          <p className="text-base mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <time className="text-xs mt-2">2022.07.11</time>
        </div>
        <div className="mt-6 ">
          <h3 className="text-2xl font-bold">This is a header</h3>
          <p className="text-base mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <time className="text-xs mt-2">2022.07.11</time>
        </div>
        <div className="mt-6 ">
          <h3 className="text-2xl font-bold">This is a header</h3>
          <p className="text-base mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <time className="text-xs mt-2">2022.07.11</time>
        </div>
        <div className="mt-6 ">
          <h3 className="text-2xl font-bold">This is a header</h3>
          <p className="text-base mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <time className="text-xs mt-2">2022.07.11</time>
        </div>
        <div className="mt-6 ">
          <Button className="font-semibold button-style">View All</Button>
        </div> */}
      </div>
    </div>
  );
}
