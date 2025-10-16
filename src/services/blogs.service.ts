import axiosInstance from "./axiosInstance";

export interface Blog {
  id?: number | string;
  heading: string;
  description: string;
  date: string;
  imageUrl: string;
  readTime: string;
  tags?: string[];
}

/**
 * Blog Service - handles all blog-related API calls
 */
export const blogService = {
  /**
   * Get all blogs
   */
  async getAll(): Promise<Blog[]> {
    const res = await axiosInstance.get("/blogs");

    console.log(res.data);

    return res.data;
  },

  /**
   * Get blog by ID
   */
  async getById(id: string | number): Promise<Blog> {
    const res = await axiosInstance.get(`/blogs/${id}`);
    return res.data;
  },

  /**
   * Create a new blog
   */
  async create(blog: Blog): Promise<Blog> {
    const res = await axiosInstance.post("/blogs", blog);
    return res.data;
  },

  /**
   * Update an existing blog
   */
  async update(id: string | number, blog: Partial<Blog>): Promise<Blog> {
    const res = await axiosInstance.put(`/blogs/${id}`, blog);
    return res.data;
  },

  /**
   * Delete a blog by ID
   */
  async delete(id: string | number): Promise<void> {
    await axiosInstance.delete(`/blogs/${id}`);
  },
};
