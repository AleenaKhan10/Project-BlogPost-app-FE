import React from "react";
import type { BlogTileProps } from "./BlogTile";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import BlogTags from "../../../components/common/BlogTags";
import { useNavigate } from "react-router-dom";

const MainPost: React.FC<BlogTileProps> = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blog/" + blog.heading, { state: blog });
  };

  return (
    <div className="relative w-full mb-8 animate-fadeIn">
      {/* Hero Image Container */}
      <div
        style={{
          backgroundImage: `url(${blog.imageUrl})`,
        }}
        className="relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden bg-center bg-cover bg-no-repeat group cursor-pointer"
        onClick={handleClick}
      >
        {/* Multiple Gradient Overlays for Depth - Enhanced for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 opacity-80"></div>

        {/* Animated Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-end p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-4xl mx-auto">
            {/* Tags */}
            <div className="mb-4 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
              <BlogTags
                tags={blog.tags}
                className="justify-start [&>span]:bg-white/20 [&>span]:backdrop-blur-md [&>span]:border [&>span]:border-white/30 [&>span]:text-white [&>span]:font-medium [&>span]:shadow-lg"
              />
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-4xl transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500" style={{
              textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.3), 2px 2px 8px rgba(0,0,0,0.5)',
              WebkitTextStroke: '1px rgba(255,255,255,0.8)',
              paintOrder: 'stroke fill'
            }}>
              {blog.heading}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white mb-6 leading-relaxed max-w-3xl transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 line-clamp-2" style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.2), 1px 1px 6px rgba(0,0,0,0.5)',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.6)'
            }}>
              {blog.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-2 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                <Calendar size={18} className="text-blue-300 drop-shadow-lg" />
                <span className="text-sm sm:text-base font-medium">{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                <Clock size={18} className="text-blue-300 drop-shadow-lg" />
                <span className="text-sm sm:text-base font-medium">{blog.readTime}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                <Sparkles size={18} className="text-amber-300 drop-shadow-lg" />
                <span className="text-sm sm:text-base font-medium">Featured</span>
              </div>
            </div>

            {/* Read More Button */}
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group/btn"
            >
              Read Full Article
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-tr from-amber-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default MainPost;
