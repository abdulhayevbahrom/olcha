import React from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Offer from "../../components/offer/Offer";
import Products from "../../components/products/Products";
import {
  productsData,
  accessories,
  washingMachines,
  households,
  mobilePhones,
} from "../../data/productsData";
import Instalment from "../../components/instalment/Instalment";
import Avto_Jihozlar from "../../assets/AvtoJihozlar.jpg";
import washing from "../../assets/washing.jpg";
import Twice_Banner from "../../components/twice_Banner/Twice_Banner";
import Popular from "../../components/popular/Popular";
import Footer from "../../components/footer/Footer";
import Tittle_form from "../../components/tittleForm/Tittle_form";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <Offer />
      <Products productsData={productsData} extraImg={Avto_Jihozlar} />
      <Instalment productsData={mobilePhones} />
      <Products productsData={accessories} />
      <Twice_Banner />
      <Popular productsData={households} />
      <Products productsData={washingMachines} extraImg={washing} />
      <Tittle_form />
      <Footer />
    </div>
  );
};

export default Home;
