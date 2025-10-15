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
    <div>
      {/* MAIN POST */}
      <div
        style={{
          backgroundImage: `url(${randomPost.imageUrl})`,
          backgroundClip: "padding-box",
          borderRadius: "10px",
        }}
        className={`main-blog h-[550px] rounded-md flex items-center justify-center bg-center bg-cover bg-no-repeat relative`}
      >
        {/* Gradient Overlay */}
        <div className="absolute rounded-md inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="p-5 py-10 bg-white rounded-md absolute bottom-0 left-50% translate-y-1/2 w-2/3 text-center">
          <h3 className="!font-bold w-[650px] m-auto text-center mb-5">
            {randomPost.heading}
          </h3>
          <p className="w-[550px] m-auto text-center">
            {randomPost.description}
          </p>

          <div className="flex items-center gap-5 m-auto justify-center mt-3 text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar1Icon size={18} /> {randomPost.date}
            </span>
            <span className="flex items-center gap-2">
              <Timer size={18} /> {randomPost.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* BLOGS */}
      <div className="grid grid-cols-4 mt-5 gap-5 mt-[180px]">
        {/* LEFT SIDE POSTS */}
        <div className="blogs-list flex-2 col-span-3">
          {blogPosts
            .filter((b) => b.id !== randomPost.id) // exclude the random post
            .map((b, index) => (
              <BlogTile blog={b} key={index} />
            ))}
        </div>
        {/* RIGHT BAR */}
        <div className="blogs-right-bar flex-1">
          <BlogIntro />

          <strong className=" mt-5 block">Explore Categories</strong>
          {categories.slice(0, 6).map((c, index) => (
            <Category key={index} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
