import { Calendar1, Timer } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlogMeta from "./BlogMeta";

export interface BlogTileProps {
  blog: {
    imageUrl: string;
    heading: string;
    description: string;
    date: string;
    readTime: string;
  };
}

const BlogTile: React.FC<BlogTileProps> = ({ blog }) => {
  const { imageUrl, heading, description, date, readTime } = blog;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blog/" + blog.heading, { state: blog });
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white p-3 sm:p-4 rounded-md flex flex-col sm:flex-row mb-4 sm:mb-3 gap-3 sm:gap-5 items-start sm:items-center cursor-pointer group hover:shadow-md transition-all duration-300"
    >
      <div className="blog-img overflow-hidden rounded-md w-full sm:flex-1">
        <img
          src={imageUrl}
          alt={heading}
          className="h-[200px] sm:h-[180px] lg:h-[240px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="blog-content w-full sm:flex-1">
        <strong className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 block group-hover:text-gray-900 transition-colors duration-300 leading-tight">
          {heading}
        </strong>
        <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed line-clamp-3">
          {description}
        </p>
        <BlogMeta date={date} readTime={readTime} />
      </div>
    </div>
  );
};

export default BlogTile;
