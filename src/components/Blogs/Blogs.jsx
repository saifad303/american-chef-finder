import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import MyDocument from "../PDFFile/MyDocument";
import { useAuthProvider } from "../../context/AuthProvider";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Spinner from "../Loading/Spinner";

const Blogs = () => {
  const [faqs, setFaqs] = useState([]);
  const { apiLinkPrefix } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiLinkPrefix}qna`).then((res) => {
      setFaqs(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <p className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl mb-10">
              Some topics you need to know about ReactJS
            </p>
            <div className=" pt-6">
              <PDFDownloadLink
                className="bg-slate-700 text-white font-medium px-8 py-4 rounded-lg"
                document={<MyDocument />}
                fileName="Blog info"
              >
                Download PDF
              </PDFDownloadLink>
            </div>
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
