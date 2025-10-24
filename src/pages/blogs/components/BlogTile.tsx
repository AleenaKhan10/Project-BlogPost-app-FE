import { Calendar, Clock, ArrowRight, Bookmark } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogMeta from "./BlogMeta";
import BlogTags from "../../../components/common/BlogTags";

export interface BlogTileProps {
  blog: {
    imageUrl: string;
    heading: string;
    description: string;
    date: string;
    readTime: string;
    tags: string[];
  };
}

const BlogTile: React.FC<BlogTileProps> = ({ blog }) => {
  const { imageUrl, heading, description, date, readTime, tags } = blog;
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    navigate("/blog/" + blog.heading, { state: blog });
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <article
      onClick={handleClick}
      className="card-premium mb-6 overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500 animate-fadeIn"
    >
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 h-full">
        {/* Image Section */}
        <div className="relative w-full sm:w-2/5 lg:w-1/3 h-[240px] sm:h-auto overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={heading}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Gradient Overlay on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Bookmark Button */}
          <button
            onClick={handleBookmark}
            className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:scale-110"
          >
            <Bookmark
              size={18}
              className={`${
                isBookmarked ? 'fill-blue-600 text-blue-600' : 'text-gray-700'
              } transition-colors duration-200`}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            {/* Tags */}
            <div className="mb-3">
              <BlogTags tags={tags.slice(0, 2)} className="[&>span]:text-xs" />
            </div>

            {/* Heading */}
            <h2 className="font-heading text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {heading}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Meta Info & CTA */}
          <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-blue-600" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-blue-600" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Read More Arrow */}
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              <span className="hidden sm:inline">Read More</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogTile;
