import { Calendar1Icon, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import BlogTile from "./components/BlogTile";
import { blogPosts } from "./data/posts";
import { categories } from "./data/categories";
import Category from "./components/Category";
import BlogIntro from "../../components/common/BlogIntro";
import MainPost from "./components/MainPost";

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
      <MainPost blog={randomPost} />

      {/* BLOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-[180px] sm:mt-[150px] lg:mt-[180px]">
        {/* LEFT SIDE POSTS */}
        <div className="blogs-list lg:col-span-3 order-1 lg:order-2">
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
