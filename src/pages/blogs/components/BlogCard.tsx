import React from "react";
import type { BlogTileProps } from "./BlogTile";
import BlogTags from "../../../components/common/BlogTags";
import BlogMeta from "./BlogMeta";
import { useNavigate } from "react-router-dom";

const BlogCard: React.FC<BlogTileProps> = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blog/" + blog.heading, { state: blog });
  };
  return (
    <div
      className="p-5 bg-white rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="blog-img">
        <img
          src={blog.imageUrl}
          alt={blog.heading}
          className="w-full h-full object-cover group-hover:scale-105 rounded-md transition-transform duration-300"
        />
      </div>
      <div className="tags">
        <BlogTags tags={blog.tags} />
      </div>
      <h2 className="text-xl mt-3 font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
        {blog.heading}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {blog.description}
      </p>
      <BlogMeta date={blog.date} readTime={blog.readTime} />
    </div>
  );
};

export default BlogCard;
