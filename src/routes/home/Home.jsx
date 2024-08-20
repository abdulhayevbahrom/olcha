import React from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Offer from "../../components/offer/Offer";
import Products from "../../components/products/Products";
import { productsData } from "../../data/productsData";
import Instalment from "../../components/instalment/Instalment";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <Offer />
      <Products productsData={productsData} />
      <Instalment />
    </div>
  );
};

export default Home;
