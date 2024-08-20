import React from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Offer from "../../components/offer/Offer";
import Products from "../../components/products/Products";
import {
  productsData,
  accessories,
  washingMachines,
} from "../../data/productsData";
import Instalment from "../../components/instalment/Instalment";
import Avto_Jihozlar from "../../assets/AvtoJihozlar.jpg";
import washing from "../../assets/washing.jpg";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <Offer />
      <Products productsData={productsData} extraImg={Avto_Jihozlar} />
      <Instalment />
      <Products productsData={accessories} />
      <Products productsData={washingMachines} extraImg={washing} />
    </div>
  );
};

export default Home;
