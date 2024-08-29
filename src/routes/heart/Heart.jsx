import React from "react";
import "./Heart.css";
import Footer from "../../components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";

function Heart() {
  const heart = [1];

  let heartStore = useSelector((store) => store.heart);

  console.log(heartStore);

  return (
    <>
      {heart.length ? (
        <div className="openHeart">
          <h2>openHeart</h2>
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
