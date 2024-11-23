import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://portfoloi-server.vercel.app/api/v1/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const result = await response.json();
        setBlogs(result.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <section className="py-10" id="blogs">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Blogs
        </h2>
        {blogs.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <motion.div
                key={blog._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#184e77] mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {blog.intro.length > 100
                      ? blog.intro.substring(0, 100) + "..."
                      : blog.intro}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {blog.category.title}
                    </span>
                    <a
                      href={`/blog/${blog.slug}`}
                      className="btn btn-link text-blue-600 "
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-red-600">
            <p>No blogs found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
