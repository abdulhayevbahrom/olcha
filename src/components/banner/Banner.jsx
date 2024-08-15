import React from "react";
import "./Banner.css";
import Carousel from "./carousel/Carousel";
import DaysProduct from "./daysProduct/DaysProduct";
const Banner = () => {
  return (
    <div className="banner">
      <Carousel />
      <DaysProduct />
    </div>
  );
};

export default Banner;
