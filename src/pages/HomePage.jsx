import React from "react";
import Banner from "../components/HomeComponents/Banner";
import ChefList from "../components/HomeComponents/Chefs/ChefList";
import Testimonials from "../components/HomeComponents/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefList></ChefList>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
