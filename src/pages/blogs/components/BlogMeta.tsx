import { Calendar1, Timer } from "lucide-react";
import React from "react";

interface BlogMetaProps {
  date: string;
  readTime: string;
  className?: string;
}

const BlogMeta: React.FC<BlogMetaProps> = ({ date, readTime, className }) => {
  return (
    <div className={`flex gap-3 mt-3 !tex-sm text-gray-500 ${className}`}>
      <span className="flex items-center gap-2">
        <Calendar1 size={18} /> {date}
      </span>
      <span className="flex items-center gap-1">
        <Timer className="" size={18} /> {readTime}
      </span>
    </div>
  );
};

export default BlogMeta;
