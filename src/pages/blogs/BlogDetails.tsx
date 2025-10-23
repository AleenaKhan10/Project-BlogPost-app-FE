import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BlogMeta from "./components/BlogMeta";
import BlogIntro from "../../components/common/BlogIntro";
import { categories } from "./data/categories";
import { blogPosts } from "./data/posts";
import Category from "./components/Category";
import BlogTags from "../../components/common/BlogTags";
import { Clock, Calendar, Eye, Share2, Bookmark, Heart } from "lucide-react";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { heading } = useParams();
  const [blog, setBlog] = useState(location.state);

  // const blog = location.state;

  if (!blog) return <p>No blog data found.</p>;

  // Get related posts based on similar tags or random selection
  const getRelatedPosts = () => {
    const relatedPosts = blogPosts
      .filter((post) => post.id !== blog.id) // Exclude current blog
      .filter(
        (post) => blog.tags?.some((tag) => post.tags?.includes(tag)) // Posts with similar tags
      )
      .slice(0, 3); // Limit to 3 posts

    // If not enough related posts, fill with random posts
    if (relatedPosts.length < 3) {
      const remainingPosts = blogPosts
        .filter((post) => post.id !== blog.id && !relatedPosts.includes(post))
        .slice(0, 3 - relatedPosts.length);
      relatedPosts.push(...remainingPosts);
    }

    return relatedPosts;
  };

  const relatedPosts = getRelatedPosts();

  //? EFFECTS
  useEffect(() => {
    if (location.state) {
      setBlog(location.state);
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on new post
    }
  }, [location.state]);

  return (
    <div className=" mx-auto">
      {/* Compact Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            {blog.heading}
          </h1>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Bookmark className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <BlogMeta date={blog.date} readTime={blog.readTime} />

        <BlogTags tags={blog.tags} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Article Content */}
        <article className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
              <img
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                src={blog.imageUrl}
                alt={blog.heading}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Article Body */}
            <div className="p-6 lg:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                  {blog.description}
                </p>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In today's fast-paced digital landscape, innovation is no
                    longer optional — it's essential. From artificial
                    intelligence to clean energy solutions, the world is
                    evolving faster than ever, and those who adapt quickly are
                    the ones who thrive.
                  </p>

                  <p>
                    But innovation isn't just about technology — it's about
                    mindset. True progress begins with curiosity and a
                    willingness to challenge old ideas. Whether you're an
                    entrepreneur, a student, or simply someone eager to stay
                    ahead, embracing continuous learning and creativity can
                    transform the way you work and live.
                  </p>

                  <blockquote className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg my-6">
                    <p className="text-green-800 font-medium italic">
                      "Innovation distinguishes between a leader and a follower.
                      The key is not just to think outside the box, but to
                      realize there is no box."
                    </p>
                  </blockquote>

                  <p>
                    In this article, we'll explore how emerging technologies are
                    reshaping industries, how leaders can build cultures that
                    foster innovation, and what trends are set to define the
                    next decade. Get ready to rethink what's possible and take a
                    closer look at the power of ideas that move the world
                    forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Blog Intro */}
          {/* <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <BlogIntro />
          </div> */}

          {/* Related Posts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full"></div>
              Related Posts
            </h3>
            <div className="space-y-4">
              {relatedPosts.map((post, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.heading}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        onClick={() =>
                          navigate("/blog/" + post.heading, { state: post })
                        }
                        className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-1"
                      >
                        {post.heading}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  {index < relatedPosts.length - 1 && (
                    <div className="border-b border-gray-100 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              Explore Categories
            </h3>
            <div className="space-y-2">
              {categories.slice(0, 6).map((c, index) => (
                <Category key={index} category={c} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;
