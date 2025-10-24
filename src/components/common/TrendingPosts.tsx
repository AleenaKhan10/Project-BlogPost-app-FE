import React from "react";
import { TrendingUp, Clock, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TrendingPost {
  id: number;
  title: string;
  imageUrl: string;
  readTime: string;
  views: string;
}

const trendingData: TrendingPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for Modern Web Development in 2024",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    readTime: "5 min read",
    views: "12.5k",
  },
  {
    id: 2,
    title: "The Future of AI: What You Need to Know Today",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    readTime: "8 min read",
    views: "9.8k",
  },
  {
    id: 3,
    title: "Building Scalable Applications with Modern Architecture",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
    readTime: "6 min read",
    views: "8.2k",
  },
  {
    id: 4,
    title: "Design Systems: A Complete Guide for Teams",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
    readTime: "7 min read",
    views: "7.1k",
  },
];

const TrendingPosts = () => {
  const navigate = useNavigate();

  return (
    <div className="card-premium p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg">
          <TrendingUp className="text-white" size={20} />
        </div>
        <h3 className="font-heading text-xl font-bold text-gray-900">
          Trending Now
        </h3>
      </div>

      {/* Trending Posts List */}
      <div className="space-y-4">
        {trendingData.map((post, index) => (
          <div
            key={post.id}
            onClick={() => navigate(`/blog/${post.title}`)}
            className="group flex gap-4 cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-all duration-300"
          >
            {/* Rank Number */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm shadow-md">
                {index + 1}
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                {post.title}
              </h4>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={12} />
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="w-full mt-4 py-2.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200">
        View All Trending Posts
      </button>
    </div>
  );
};

export default TrendingPosts;
