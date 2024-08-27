import React from "react";
import "./Popular.css";
import Products from "../products/Products";

function Popular({ productsData }) {
  return (
    <div className="popular">
      <div className="left">
        <img
          src="https://olcha.uz/image/original/homePage/cdn_1/2024-06-12/FolJwWA1qnGJCfyhZ7ebgiIlfQ2tjIgLgmw4p4nVcxy6X4UGftKimVH2bgQB.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <Products productsData={productsData} />
      </div>
    </div>
  );
}

export default Popular;
