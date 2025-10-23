import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  Eye,
  ArrowLeft,
  Filter,
  Grid,
  List,
} from "lucide-react";
import { blogPosts } from "./data/posts";
import { categories } from "./data/categories";
import BlogTile from "./components/BlogTile";
import BlogCard from "./components/BlogCard";
import AppButton from "../../components/common/AppButton";

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBlogClick = (blogId: number) => {
    navigate(`/blogs/${blogId}`);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <button
            onClick={handleBackClick}
            className="flex items-center cursor-pointer gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to All Blogs</span>
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-md p-8 mb-8">
            {currentCategory && (
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={currentCategory.img}
                    alt={currentCategory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {currentCategory.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {currentCategory.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Filter size={16} />
                      {blogPosts.length} articles
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`cursor-pointer p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`cursor-pointer p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Listings */}
        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter size={32} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We couldn't find any articles in this category. Try exploring
                other categories.
              </p>
            </div>
          </div>
        ) : (
          <>
            {viewMode == "list" &&
              blogPosts.map((b, i) => <BlogTile key={i} blog={b} />)}
            {viewMode == "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((b, i) => (
                  <BlogCard key={i} blog={b} />
                ))}
              </div>
            )}
          </>
        )}

        {/* Load More Button (for future pagination) */}
        {blogPosts.length > 0 && (
          <>
            <div className="text-center mt-12 ">
              <AppButton
                className="m-auto cursor-pointer"
                text="Load More Articles "
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
