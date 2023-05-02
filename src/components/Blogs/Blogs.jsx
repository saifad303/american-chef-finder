import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";

const Blogs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get("/api/faq.json").then((res) => {
      setFaqs(res.data);
    });
  }, []);

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="font-semibold text-indigo-600">
              Frequently asked questions
            </h3>
            <p className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
              All information you need to know
            </p>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <ul className="space-y-4 divide-y">
            {faqs.map((faq) => (
              <Blog key={faq.id} faq={faq}></Blog>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
