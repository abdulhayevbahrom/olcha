// import React from "react";
// import "./Products.css";
// import { FaRegHeart } from "react-icons/fa";
// import { IoStatsChart } from "react-icons/io5";
// import { LuShoppingCart } from "react-icons/lu";
// import { Link } from "react-router-dom";

// function Products({ productsData }) {
//   return (
//     <div className="products">
//       {productsData.map((item, index) => (
//         <div className="productItem" key={index}>
//           {item.discount > 0 && <p className="discount">{item.discount} %</p>}
//           <div className="product_action">
//             <FaRegHeart />
//             <IoStatsChart />
//           </div>
//           <Link to={"/singlepage/" + item.id}>
//             <img src={item.img} alt={item.title} title={item.title} />
//           </Link>
//           <p className="product_title">{item.title}</p>
//           <s>{Math.round(item.price + (item.price * 10) / 100)}</s>
//           <p className="product_price">{item.price}</p>
//           <p className="product_credit">
//             {Math.round(item.price / 12)} so'm 12 oy
//           </p>
//           <div className="productBtns">
//             <button>
//               <LuShoppingCart />
//             </button>
//             <button>Muddatli to'lov</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;

import React, { useState } from "react";
import "./Products.css";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Popup from "../popup/Popup";

function Products({ productsData, extraImg }) {
  const [popup, setPopup] = useState(false);
  return (
    <div className="products">
      {popup && <Popup setPopup={setPopup} data={popup} />}
      {productsData.map((item, index) => (
        <div className="productItem" key={index}>
          {item.discount > 0 && <p className="discount">{item.discount} %</p>}
          <div className="product_action">
            <FaRegHeart />
            <IoStatsChart />
          </div>
          <Link to={"/singlepage/" + item.id}>
            <img src={item.img} alt={item.title} title={item.title} />
          </Link>
          <p className="product_title">{item.title}</p>
          <div className="div">
            <s>{Math.round(item.price + (item.price * 10) / 100)}</s>
            <p className="product_price">{item.price}</p>
            <p className="product_credit">
              {Math.round(item.price / 12)} so'm 12 oy
            </p>
          </div>
          <div className="productBtns">
            <button className="shopping">
              <LuShoppingCart />
            </button>
            <button onClick={() => setPopup(item)} className="tolov">
              Muddatli to'lov
            </button>
          </div>
        </div>
      ))}
      {extraImg && (
        <div className="productImgForm">
          <img src={extraImg} alt="" />
        </div>
      )}
    </div>
  );
}

export default Products;
