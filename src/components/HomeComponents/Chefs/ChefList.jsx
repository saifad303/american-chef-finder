import React, { useEffect, useState } from "react";
import axios from "axios";
import ChefCard from "./ChefCard";

const ChefList = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    axios.get("/api/chefs.json").then((res) => {
      console.log(res.data);
      setChefs(res.data);
    });
  }, []);

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl text-center mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our talent chefs
          </h3>
          <p className="text-gray-600 mt-3">
            Indulge in the Artistry of Our Talented Chefs and Savor the Finest
            Creations from Their Culinary Journey
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {chefs.map((chef) => (
              <ChefCard key={chef.id} chef={chef}></ChefCard>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChefList;