import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BlogMeta from "./components/BlogMeta";
import BlogIntro from "../../components/common/BlogIntro";
import { categories } from "./data/categories";
import Category from "./components/Category";

const BlogDetails = () => {
  const { heading } = useParams();

  const location = useLocation();
  const blog = location.state;

  if (!blog) return <p>No blog data found.</p>;

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-4 lg:col-span-3  bg-white rounded-md p-5">
          <h2 className="mb-5">{blog.heading}</h2>
          <BlogMeta
            date={blog.date}
            readTime={blog.readTime}
            className="mb-5"
          />
          <div className="rounded-md overflow-hidden h-[250px] lg:h-[450px] ">
            <img
              className="h-full w-full object-cover"
              src={blog.imageUrl}
              alt=""
            />
          </div>
          <div className="mt-5">
            <p className="text-sm">{blog.description}</p>
            <p className="text-sm">
              In today’s fast-paced digital landscape, innovation is no longer
              optional — it’s essential. From artificial intelligence to clean
              energy solutions, the world is evolving faster than ever, and
              those who adapt quickly are the ones who thrive. But innovation
              isn’t just about technology — it’s about mindset. True progress
              begins with curiosity and a willingness to challenge old ideas.
              Whether you're an entrepreneur, a student, or simply someone eager
              to stay ahead, embracing continuous learning and creativity can
              transform the way you work and live. In this article, we’ll
              explore how emerging technologies are reshaping industries, how
              leaders can build cultures that foster innovation, and what trends
              are set to define the next decade. Get ready to rethink what’s
              possible and take a closer look at the power of ideas that move
              the world forward.
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 ">
          <BlogIntro />
          <strong className=" mt-5 block">Explore Categories</strong>
          {categories.slice(0, 6).map((c, index) => (
            <Category key={index} category={c} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
