import {
  ArrowRight,
  Calendar1Icon,
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Timer,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";
import BlogTile from "./components/BlogTile";
import { blogPosts } from "./data/posts";
import { Link } from "react-router-dom";
import { categories } from "./data/categories";
import Category from "./components/Category";

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
          <div className="p-5 py-10 relative rounded-md bg-white border border-gray-200 mb-5 text-center ">
            <div
              className="bg-center bg-cover bg-no-repeat absolute top-1/2 left-1/2 -translate-1/2 h-[60%] w-[60%]"
              style={{
                backgroundImage:
                  "url(https://themeger.shop/wordpress/katen/wp-content/uploads/2022/09/map-bg.png)",
                backgroundPosition: "center center",
              }}
            ></div>
            <div className="mb-5">
              <img
                className="m-auto"
                src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
              />
            </div>

            <p className="!text-sm">
              Hello, We’re content writer who is fascinated by content fashion,
              celebrity and lifestyle. We helps clients bring the right content
              to the right people.
            </p>
            <div className="social-media mt-5 flex items-center justify-center gap-5">
              <Facebook size={18} />
              <Instagram size={18} />
              <Dribbble size={18} />
              <Youtube size={18} />
              <Linkedin size={18} />
            </div>
          </div>

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
