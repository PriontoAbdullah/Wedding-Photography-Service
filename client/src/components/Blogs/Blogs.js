import React, { useEffect, useState } from "react";
import blogData from "../../data/blogData.js";

const Blog = () => {
  const [blogs, SetBlogs] = useState([]);

  // Get team members data
  useEffect(() => {
    SetBlogs(blogData);
  }, [blogs]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            <span className="text-red-accent-700">Wedding Photography</span>
            <br />
            <span className="leading-loose ">Making Weddings beautiful</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-red-600 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="font-body text-base text-gray-700 md:text-lg">
            In the last 2 years we have covered more than 800+ events. Our
            strong team has 16 Photographers, cinematographers & Editors. All
            our photographers are highly educated. We have two dedicated branch
            in Dhaka & Chittagong to meet the demand of clients all over
            bangladesh.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {blogs &&
          blogs.map((blog) => (
            <div
              className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
              key={blog._id}
            >
              <img
                src={blog.image}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title={blog.label}
                  >
                    {blog.label}
                  </a>
                  <span className="text-gray-600">{blog.date}</span>
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title={blog.title}
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {blog.title}
                </a>
                <p className="mb-2 text-gray-700">{blog.description}</p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
