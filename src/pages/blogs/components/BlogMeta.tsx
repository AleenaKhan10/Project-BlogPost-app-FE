import { Calendar1, Timer } from "lucide-react";
import React from "react";

interface BlogMetaProps {
  date: string;
  readTime: string;
  className?: string;
}

const BlogMeta: React.FC<BlogMetaProps> = ({ date, readTime, className }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 text-xs sm:text-sm text-gray-500 ${className}`}>
      <span className="flex items-center gap-2">
        <Calendar1 size={16} /> {date}
      </span>
      <span className="flex items-center gap-2">
        <Timer size={16} /> {readTime}
      </span>
    </div>
  );
};

export default BlogMeta;
