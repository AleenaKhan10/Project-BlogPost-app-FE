import { Calendar1, Eye, Timer } from "lucide-react";
import React from "react";

interface BlogMetaProps {
  date: string;
  readTime: string;
  className?: string;
}

const BlogMeta: React.FC<BlogMetaProps> = ({ date, readTime, className }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 text-xs sm:text-sm text-gray-500 ${className}`}
    >
      <span className="flex items-center gap-1">
        <Calendar1 size={16} /> {date}
      </span>
      <span className="flex items-center gap-1">
        <Timer size={16} /> {readTime}
      </span>
      <div className="flex items-center gap-1">
        <Eye className="w-4 h-4" />
        <span>1.2k views</span>
      </div>
    </div>
  );
};

export default BlogMeta;
