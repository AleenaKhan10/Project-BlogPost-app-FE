import { Calendar1, Timer } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlogMeta from "./BlogMeta";

interface BlogTileProps {
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
      className="bg-white p-2 rounded-md flex mb-3 gap-5 items-center cursor-pointer group hover:shadow-md transition-all duration-300"
    >
      <div className="blog-img overflow-hidden rounded-md flex-1">
        <img src={imageUrl} alt="" className="h-[240px] w-full object-cover" />
      </div>
      <div className="blog-content flex-1">
        <strong className="text-lg !mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {heading}
        </strong>
        <p>{description}</p>
        <BlogMeta date={date} readTime={readTime} />
      </div>
    </div>
  );
};

export default BlogTile;
