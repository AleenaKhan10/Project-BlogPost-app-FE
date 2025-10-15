import { Calendar1Icon, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import BlogTile from "./components/BlogTile";
import { blogPosts } from "./data/posts";
import { categories } from "./data/categories";
import Category from "./components/Category";
import BlogIntro from "../../components/common/BlogIntro";

const Blogs = () => {
  const [randomPost, setRandomPost] = useState(blogPosts[0]);

  // ? EFFECTS
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * blogPosts.length);
    setRandomPost(blogPosts[randomIndex]);
  }, []);

  return (
    <div className="w-full">
      {/* MAIN POST */}
      <div
        style={{
          backgroundImage: `url(${randomPost.imageUrl})`,
          backgroundClip: "padding-box",
          borderRadius: "10px",
        }}
        className={`main-blog h-[300px] sm:h-[400px] lg:h-[550px] rounded-md flex items-center justify-center bg-center bg-cover bg-no-repeat relative`}
      >
        {/* Gradient Overlay */}
        <div className="absolute rounded-md inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="p-4 sm:p-5 py-6 sm:py-10 bg-white rounded-md absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] sm:w-[80%] lg:w-2/3 text-center mx-auto">
          <h3 className="font-bold text-lg sm:text-xl lg:text-2xl max-w-full lg:max-w-[650px] mx-auto text-center mb-3 sm:mb-5 leading-tight">
            {randomPost.heading}
          </h3>
          <p className="text-sm sm:text-base max-w-full lg:max-w-[550px] mx-auto text-center text-gray-600 leading-relaxed">
            {randomPost.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center mt-3 text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <Calendar1Icon size={16} /> {randomPost.date}
            </span>
            <span className="flex items-center gap-2">
              <Timer size={16} /> {randomPost.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* BLOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-[120px] sm:mt-[150px] lg:mt-[180px]">
        {/* LEFT SIDE POSTS */}
        <div className="blogs-list lg:col-span-3 order-2 lg:order-1">
          {blogPosts
            .filter((b) => b.id !== randomPost.id) // exclude the random post
            .map((b, index) => (
              <BlogTile blog={b} key={index} />
            ))}
        </div>
        {/* RIGHT BAR */}
        <div className="blogs-right-bar lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0">
          <BlogIntro />

          <strong className="mt-5 block text-lg">Explore Categories</strong>
          <div className="mt-3">
            {categories.slice(0, 6).map((c, index) => (
              <Category key={index} category={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
