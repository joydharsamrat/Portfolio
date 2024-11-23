import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";

const BlogDetails = () => {
  const { slug } = useParams(); // Get the slug from the route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://portfoloi-server.vercel.app/api/v1/blogs/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const result = await response.json();
        setBlog(result.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  if (!blog) {
    return (
      <div className="text-center py-10 text-gray-700">
        Blog not found. Please check the URL.
      </div>
    );
  }

  const { title, content, coverImage, category, intro, tags, createdAt } = blog;

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-5">
        <article className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Cover Image */}
          <img
            src={coverImage}
            alt={title}
            className="w-full h-64 object-cover"
          />
          {/* Blog Details */}
          <div className="p-6">
            {/* Title */}
            <h1 className="text-2xl font-bold text-[#184e77] mb-4">{title}</h1>
            {/* Intro */}
            <p className="text-gray-600 mb-4">{intro}</p>
            {/* Metadata */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="mr-4">
                <strong>Category:</strong> {category.title}
              </span>
              <span>
                <strong>Published:</strong>{" "}
                {new Date(createdAt).toLocaleDateString()}
              </span>
            </div>
            {/* Content */}
            <div
              className=" text-gray-700 prose"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {/* Tags */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Tags:
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetails;
