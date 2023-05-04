import React, { useEffect, useState } from "react";
import axios from "axios";
import Testimonial from "./Testimonial";
import { useAuthProvider } from "../../../context/AuthProvider";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const { apiLinkPrefix } = useAuthProvider();

  useEffect(() => {
    axios.get(`${apiLinkPrefix}testimonials`).then((res) => {
      setTestimonials(res.data);
    });
  }, []);

  return (
    <section className="relative py-14">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            What Other Chefs Say About Us
          </h3>
          <p className="mt-3 text-gray-600">
            Hear From the Chefs Who Found Their Dream Jobs Through Our Site:
            Testimonials and Success Stories
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                testimonial={testimonial}
              ></Testimonial>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-[350px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgb(210 210 210 / 20%) 4.54%, rgb(75 75 75 / 17%) 34.2%, rgb(255 255 255 / 10%) 77.55%)",
        }}
      ></div>
    </section>
  );
};

export default Testimonials;
