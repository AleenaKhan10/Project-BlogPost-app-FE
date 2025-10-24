import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Grid,
  List,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import { blogPosts } from "./data/posts";
import { categories } from "./data/categories";
import BlogTile from "./components/BlogTile";
import BlogCard from "./components/BlogCard";

interface Blog {
  id: number;
  heading: string;
  description: string;
  date: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
}

const CategoryBlogs = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"date" | "readTime">("date");
  const [currentCategory, setCurrentCategory] = useState<any>(null);

  useEffect(() => {
    // Find the current category
    const categoryData = categories.find(
      (cat) =>
        cat.title.toLowerCase().replace(/\s+/g, "-") === category?.toLowerCase()
    );

    setCurrentCategory(categoryData);

    // Filter blogs based on category
    let filtered = blogPosts;
    if (category && category !== "all") {
      const categoryTitle = category
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      filtered = blogPosts.filter((blog) =>
        blog.tags.some(
          (tag) =>
            tag.toLowerCase().includes(categoryTitle.toLowerCase()) ||
            categoryTitle.toLowerCase().includes(tag.toLowerCase())
        )
      );
    }

    // Sort blogs
    if (sortBy === "date") {
      filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else {
      filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
    }

    setFilteredBlogs(filtered);
  }, [category, sortBy]);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-8 animate-fadeIn">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </button>

          {currentCategory && (
            <div className="card-premium p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Category Icon */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                    <img
                      src={currentCategory.img}
                      alt={currentCategory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Category Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
                      {currentCategory.title}
                    </h1>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                      <TrendingUp size={14} />
                      {filteredBlogs.length} Articles
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed max-w-3xl">
                    {currentCategory.desc}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 card-premium p-1.5 shadow-md">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Grid size={18} />
                <span className="hidden sm:inline font-medium text-sm">Grid</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <List size={18} />
                <span className="hidden sm:inline font-medium text-sm">List</span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "readTime")}
                className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:border-blue-500 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="date">Latest First</option>
                <option value="readTime">Quick Reads</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blog Listings */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 animate-fadeIn">
            <div className="card-premium p-12 max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Grid size={32} className="text-blue-600" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any articles in this category. Try exploring
                other categories.
              </p>
              <button
                onClick={handleBackClick}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Browse All Articles
              </button>
            </div>
          </div>
        ) : (
          <>
            {viewMode === "list" && (
              <div className="animate-fadeIn">
                {filteredBlogs.map((b, i) => (
                  <BlogTile key={i} blog={b} />
                ))}
              </div>
            )}

            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {filteredBlogs.map((b, i) => (
                  <BlogCard key={i} blog={b} />
                ))}
              </div>
            )}
          </>
        )}

        {/* Load More Button */}
        {filteredBlogs.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
