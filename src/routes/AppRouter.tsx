import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Blogs from "../pages/blogs/Blogs";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Blogs />} />
    </Routes>
  );
};

export default AppRouter;
