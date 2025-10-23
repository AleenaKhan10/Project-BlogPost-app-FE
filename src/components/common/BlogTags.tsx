import React from "react";

interface BlogTagsProps {
  tags: string[];
  className?: string;
}

const BlogTags: React.FC<BlogTagsProps> = ({ tags, className }) => {
  return (
    <>
      <div className={`flex flex-wrap gap-2 mt-2 ${className}`}>
        {tags.map((t, i) => {
          const tagColors = [
            "bg-blue-100 text-blue-700",
            "bg-green-100 text-green-700",
            "bg-yellow-100 text-yellow-700",
            "bg-pink-100 text-pink-700",
            "bg-purple-100 text-purple-700",
            "bg-orange-100 text-orange-700",
          ];
          const colorClass = tagColors[i % tagColors.length];
          return (
            <span
              key={i}
              className={`px-3 py-1 text-sm font-medium rounded-full ${colorClass} `}
            >
              {t}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default BlogTags;
