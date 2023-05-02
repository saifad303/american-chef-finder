import React from "react";

const Blog = ({ faq }) => {
  const { q, a } = faq;
  return (
    <li className="py-5">
      <summary className="flex items-center justify-between font-semibold text-gray-700">
        {q}
      </summary>
      <p className="mt-3 text-gray-600 leading-relaxed">{a}</p>
    </li>
  );
};

export default Blog;
