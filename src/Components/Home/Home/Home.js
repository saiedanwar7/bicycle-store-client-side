import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import HomeProducts from "../HomeProducts/HomeProducts";
import HomeReviews from "../HomeReviews/HomeReviews";

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <Categories></Categories>
      <HomeReviews></HomeReviews>
    </div>
  );
};

export default Home;
