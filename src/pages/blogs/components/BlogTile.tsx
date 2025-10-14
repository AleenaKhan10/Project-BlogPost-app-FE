import { Clock11 } from "lucide-react";
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
        <img src={imageUrl} alt="" className="h-[250px] w-full object-cover" />
      </div>
      <div className="blog-content flex-1">
        <strong className="text-lg !mb-3">{heading}</strong>
        <p>{description}</p>
        <div className="flex gap-5 mt-5 text-xs">
          <span>{date}</span>
          <span className="flex items-center gap-2">
            <Clock11 className="" size={18} /> {readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogTile;
