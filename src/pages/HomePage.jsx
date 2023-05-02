import React from "react";
import Banner from "../components/HomeComponents/Banner";
import ChefList from "../components/HomeComponents/Chefs/ChefList";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefList></ChefList>
    </div>
  );
};

export default HomePage;
