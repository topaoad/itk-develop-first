import React from "react";
import Link from "next/link";



export const BlogArchive= ({ blog})=> {
  return (
    <div className="md:mt-10 mt-20">
      <h2 className="sub-title">Blog</h2>
      <div className="mt-5 blog-box">
        {/* <div className="mt-6 ">
          <h3 className="text-2xl font-bold">This is a header</h3>
          <p className="text-base mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <time className="text-xs mt-2">2022.07.11</time>
        </div> */}

        <div>
          <ul>
            {blog.map((blog,index)=> (
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
                    <p> {blog.publishedAt} </p>
                  
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
