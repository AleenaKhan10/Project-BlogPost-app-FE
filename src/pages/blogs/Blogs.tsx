import { Clock11 } from "lucide-react";
import React from "react";
import BlogTile from "./components/BlogTile";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      heading: "The Future of Clean Energy: Innovations in Solar Power",
      description:
        "Explore how next-generation solar panels and battery systems are transforming global energy consumption and driving sustainable growth.",
      date: "2025-10-10",
      imageUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
      readTime: "5 min read",
    },
    {
      id: 2,
      heading: "AI in Everyday Life: How Machine Learning Shapes Our World",
      description:
        "From smart assistants to healthcare diagnostics, discover how artificial intelligence is improving decision-making and daily experiences.",
      date: "2025-09-28",
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      readTime: "7 min read",
    },
    {
      id: 3,
      heading: "Remote Work 2.0: Redefining Productivity in a Global Economy",
      description:
        "A look at how hybrid workplaces and digital collaboration tools are reshaping corporate culture and employee engagement worldwide.",
      date: "2025-09-15",
      imageUrl:
        "https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/david-van-dijk-255503-unsplash-330x250.jpg",
      readTime: "4 min read",
    },
    {
      id: 4,
      heading: "The Art of Minimalism: Living Better with Less",
      description:
        "Learn how minimalism helps you focus on what truly matters — from decluttering your home to simplifying your digital life.",
      date: "2025-08-30",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      readTime: "3 min read",
    },
    {
      id: 5,
      heading:
        "Building for the Web in 2025: Trends Every Developer Should Know",
      description:
        "Discover the latest front-end frameworks, design systems, and performance optimization strategies driving the modern web.",
      date: "2025-08-12",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      readTime: "6 min read",
    },
  ];

  return (
    <div>
      <div className="main-blog h-[550px] bg-white rounded-md flex items-center justify-center">
        main post
      </div>
      <div className="flex mt-5 gap-5">
        <div className="blogs-list flex-2">
          {blogPosts.map((b, index) => (
            <>
              <BlogTile blog={b} key={index} />
            </>
          ))}
        </div>
        <div className="blogs-right-bar flex-1">
          <div className="p-2 rounded-md bg-white h-[650px] mb-5"></div>
          <div className="p-2 rounded-md bg-white h-[710px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
