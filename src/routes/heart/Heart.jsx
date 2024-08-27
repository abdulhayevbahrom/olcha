import React from "react";
import "./Heart.css";

function Heart() {
  return (
    <div className="heart">
      <h1>Sevimli mahsulotlar</h1>
      <div className="heart_child">
        <div className="heart-main">
          <img src={"https://olcha.uz/_nuxt/empty-img.CsNCz2BZ.png"} alt="" />
          <h2>Sevimli mahsulotlar yo'q</h2>
        </div>
      </div>
    </div>
  );
}

export default Heart;
