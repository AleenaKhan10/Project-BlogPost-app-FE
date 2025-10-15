import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Blogs from "../pages/blogs/Blogs";
import BlogDetails from "../pages/blogs/BlogDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog/:heading" element={<BlogDetails />} />
      <Route path="/" element={<Blogs />} />
    </Routes>
  );
};

export default AppRouter;
