import { useEffect, useState } from "react";
import BlogTile from "./components/BlogTile";
import { blogPosts } from "./data/posts";
import { categories } from "./data/categories";
import Category from "./components/Category";
import BlogIntro from "../../components/common/BlogIntro";
import MainPost from "./components/MainPost";
import AppButton from "../../components/common/AppButton";
import { blogService } from "../../services/blogs.service";
import Newsletter from "../../components/common/Newsletter";
import TrendingPosts from "../../components/common/TrendingPosts";

const Blogs = () => {
  const [randomPost, setRandomPost] = useState(blogPosts[0]);

  // ? EFFECTS
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * blogPosts.length);
    setRandomPost(blogPosts[randomIndex]);
    fetchBlogs();
  }, []);

  //? METHODS
  const fetchBlogs = async () => {
    try {
      const blogs = await blogService.getAll();
      console.log("Blogs fetched:", blogs);
    } catch (err) {
      console.error("Failed to load blogs:", err);
    }
  };

  return (
    <div className="w-full">
      {/* MAIN POST */}
      <MainPost blog={randomPost} />

      {/* BLOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
        {/* LEFT SIDE POSTS */}
        <div className="blogs-list lg:col-span-3 order-1 lg:order-2">
          {blogPosts
            .filter((b) => b.id !== randomPost.id) // exclude the random post
            .map((b, index) => (
              <BlogTile blog={b} key={index} />
            ))}
        </div>
        {/* RIGHT BAR */}
        <div className="blogs-right-bar lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0 space-y-6">
          <div className="card-premium p-6">
            <BlogIntro />
          </div>

          <TrendingPosts />

          <div className="card-premium p-6">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h3>
            <div className="space-y-2">
              {categories.slice(0, 6).map((c, index) => (
                <Category key={index} category={c} />
              ))}
            </div>
          </div>

          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
