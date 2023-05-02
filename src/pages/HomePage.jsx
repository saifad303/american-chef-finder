import React from "react";
import Banner from "../components/HomeComponents/Banner";
import ChefList from "../components/HomeComponents/Chefs/ChefList";
import Testimonials from "../components/HomeComponents/Testimonials/Testimonials";
import Brands from "../components/HomeComponents/TrustedBrands/Brands";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefList></ChefList>
      <Testimonials></Testimonials>
      <Brands></Brands>
    </div>
  );
};

export default HomePage;
