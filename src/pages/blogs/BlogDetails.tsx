import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BlogMeta from "./components/BlogMeta";
import { categories } from "./data/categories";
import { blogPosts } from "./data/posts";
import Category from "./components/Category";
import BlogTags from "../../components/common/BlogTags";
import { Clock, Calendar, Eye, Heart, Bookmark, ArrowLeft } from "lucide-react";
import ReadingProgress from "../../components/common/ReadingProgress";
import ShareButtons from "../../components/common/ShareButtons";
import AuthorBio from "../../components/common/AuthorBio";
import Newsletter from "../../components/common/Newsletter";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { heading } = useParams();
  const [blog, setBlog] = useState(location.state);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 500) + 100);

  if (!blog) return <p>No blog data found.</p>;

  // Get related posts based on similar tags
  const getRelatedPosts = () => {
    const relatedPosts = blogPosts
      .filter((post) => post.id !== blog.id)
      .filter((post) => blog.tags?.some((tag) => post.tags?.includes(tag)))
      .slice(0, 3);

    if (relatedPosts.length < 3) {
      const remainingPosts = blogPosts
        .filter((post) => post.id !== blog.id && !relatedPosts.includes(post))
        .slice(0, 3 - relatedPosts.length);
      relatedPosts.push(...remainingPosts);
    }

    return relatedPosts;
  };

  const relatedPosts = getRelatedPosts();

  useEffect(() => {
    if (location.state) {
      setBlog(location.state);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.state]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <>
      <ReadingProgress />

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-8">
            {/* Header */}
            <div className="mb-8">
              <BlogTags tags={blog.tags} className="mb-4" />

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.heading}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">{blog.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">
                    {Math.floor(Math.random() * 5000) + 1000} views
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-300 ${
                    isLiked
                      ? "bg-red-50 border-red-500 text-red-600"
                      : "bg-white border-gray-200 text-gray-600 hover:border-red-500 hover:text-red-600"
                  }`}
                >
                  <Heart
                    size={18}
                    className={`${isLiked ? "fill-red-600" : ""} transition-all duration-300`}
                  />
                  <span className="font-medium text-sm">{likes}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-300 ${
                    isBookmarked
                      ? "bg-blue-50 border-blue-500 text-blue-600"
                      : "bg-white border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  <Bookmark
                    size={18}
                    className={`${isBookmarked ? "fill-blue-600" : ""} transition-all duration-300`}
                  />
                  <span className="font-medium text-sm">
                    {isBookmarked ? "Saved" : "Save"}
                  </span>
                </button>

                <ShareButtons url={window.location.href} title={blog.heading} />
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-8 group">
              <img
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={blog.imageUrl}
                alt={blog.heading}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Article Body */}
            <div className="card-premium p-6 sm:p-8 lg:p-10 mb-8">
              <div className="prose prose-lg max-w-none">
                {/* Lead Paragraph */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  {blog.description}
                </p>

                {/* Main Content */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">
                    Understanding the Impact
                  </h2>

                  <p>
                    In today's rapidly evolving digital landscape, innovation has become more than
                    just a buzzword—it's the driving force behind transformative change across
                    industries. From artificial intelligence revolutionizing healthcare diagnostics
                    to renewable energy solutions reshaping our approach to sustainability, we're
                    witnessing an unprecedented era of technological advancement.
                  </p>

                  <p>
                    What makes this moment particularly significant is the convergence of multiple
                    technological breakthroughs happening simultaneously. Machine learning algorithms
                    are becoming more sophisticated, quantum computing is moving from theory to
                    practical application, and biotechnology is unlocking new possibilities in
                    medicine and agriculture.
                  </p>

                  <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-2xl my-8">
                    <p className="text-gray-800 font-medium italic text-lg">
                      "The future belongs to those who can adapt quickly, think creatively, and
                      embrace change as an opportunity rather than a threat. Innovation isn't just
                      about technology—it's about mindset."
                    </p>
                    <footer className="text-sm text-gray-600 mt-2">— Industry Expert</footer>
                  </blockquote>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">
                    Key Takeaways for the Future
                  </h2>

                  <p>
                    As we look toward the future, several key trends are emerging that will shape
                    how we work, live, and interact with technology:
                  </p>

                  <ul className="space-y-3 my-6">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Automation and AI Integration:</strong> Intelligent systems will
                        handle routine tasks, freeing humans to focus on creative and strategic work.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Sustainable Technology:</strong> Green tech solutions will become
                        standard practice across all industries.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Remote Collaboration:</strong> Advanced tools will make distributed
                        teams as effective as co-located ones.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Continuous Learning:</strong> Lifelong education will become essential
                        as skills evolve rapidly.
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Practical Applications
                  </h3>

                  <p>
                    The real power of these innovations lies not in the technology itself, but in
                    how we apply it to solve real-world problems. Whether you're a business leader
                    looking to streamline operations, a developer building the next generation of
                    applications, or simply someone interested in staying ahead of the curve,
                    understanding these trends is crucial.
                  </p>

                  <p>
                    Success in this new era requires a combination of technical knowledge, adaptability,
                    and a willingness to experiment. Those who thrive will be the ones who can balance
                    innovation with practical implementation, always keeping the end user's needs at
                    the forefront.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 my-8 border-2 border-blue-100">
                    <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">
                      💡 Pro Tip
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Start small with new technologies. Experiment with pilot projects, gather
                      feedback, and iterate. The most successful implementations often begin with
                      focused, manageable initiatives that demonstrate clear value before scaling up.
                    </p>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">
                    Looking Ahead
                  </h2>

                  <p>
                    As we continue navigating this era of rapid change, one thing remains constant:
                    the need for curiosity, adaptability, and a commitment to continuous improvement.
                    The technologies and trends we've discussed are just the beginning. The next decade
                    promises even more exciting developments that will reshape how we approach problems
                    and create solutions.
                  </p>

                  <p>
                    The question isn't whether change will happen—it's whether we'll be ready to
                    embrace it. By staying informed, remaining flexible, and maintaining a growth
                    mindset, we can not only adapt to the future but help shape it.
                  </p>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <AuthorBio />

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <div
                    key={index}
                    onClick={() => navigate("/blog/" + post.heading, { state: post })}
                    className="card-premium overflow-hidden cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.heading}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-heading font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {post.heading}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Categories */}
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

            {/* Newsletter */}
            <Newsletter />
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
