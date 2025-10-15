import React from "react";
import type { BlogTileProps } from "./BlogTile";
import { Calendar1Icon, Timer } from "lucide-react";

const MainPost: React.FC<BlogTileProps> = ({ blog }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${blog.imageUrl})`,
        backgroundClip: "padding-box",
        borderRadius: "10px",
      }}
      className={`main-blog h-[300px] sm:h-[400px] lg:h-[550px] rounded-md flex items-center justify-center bg-center bg-cover bg-no-repeat relative`}
    >
      {/* Gradient Overlay */}
      <div className="absolute rounded-md inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      <div className="p-4 sm:p-5 py-6 sm:py-10 bg-white rounded-md absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] sm:w-[80%] lg:w-2/3 text-center mx-auto">
        <h3 className="font-bold text-lg sm:text-xl lg:text-2xl max-w-full lg:max-w-[650px] mx-auto text-center mb-3 sm:mb-5 leading-tight">
          {blog.heading}
        </h3>
        <p className="text-sm sm:text-base max-w-full lg:max-w-[550px] mx-auto text-center text-gray-600 leading-relaxed">
          {blog.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center mt-3 text-gray-500 text-sm">
          <span className="flex items-center gap-2">
            <Calendar1Icon size={16} /> {blog.date}
          </span>
          <span className="flex items-center gap-2">
            <Timer size={16} /> {blog.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
