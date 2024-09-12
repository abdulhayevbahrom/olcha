import React from "react";
import "./Heart.css";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/products/Products";
import { clearHart } from "../../context/heartSlice";

function Heart() {
  const dispatch = useDispatch();

  let heartStore = useSelector((store) => store.heart);

  console.log(heartStore);

  return (
    <>
      {heartStore.length ? (
        <div className="openHeart">
          <Products productsData={heartStore} />
          <Footer />
        </div>
      ) : (
        <div className="heart">
          <h1>Sevimli mahsulotlar</h1>
          <div className="heart_child">
            <div className="heart-main">
              <img
                src={"https://olcha.uz/_nuxt/empty-img.CsNCz2BZ.png"}
                alt=""
              />
              <h2>Sevimli mahsulotlar yo'q</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Heart;
