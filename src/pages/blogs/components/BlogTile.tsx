import { Calendar1, Clock11, Timer } from "lucide-react";
import React from "react";

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
  return (
    <div className="bg-white p-2 rounded-md flex mb-3 gap-5 items-center">
      <div className="blog-img overflow-hidden rounded-md flex-1">
        <img src={imageUrl} alt="" className="h-[240px] w-full object-cover" />
      </div>
      <div className="blog-content flex-1">
        <strong className="text-lg !mb-3">{heading}</strong>
        <p>{description}</p>
        <div className="flex gap-3 mt-3 !tex-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Calendar1 size={18} /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Timer className="" size={18} /> {readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogTile;
