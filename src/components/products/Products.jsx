import React, { useState } from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Popup from "../popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare, removeCompareItem } from "../../context/compareSlice";
import { enqueueSnackbar } from "notistack";
import { addToHeart, removeFromHeart } from "../../context/heartSlice";

function Products({ productsData, extraImg }) {
  const dispatch = useDispatch();
  const compareData = useSelector((store) => store.compare);
  let heart = useSelector((store) => store.heart);
  const [popup, setPopup] = useState(false);

  // add to comapre
  const addToCompareProduct = (item) => {
    let res = compareData.some((i) => i.id === item.id);
    if (!res) {
      dispatch(addToCompare(item));
      enqueueSnackbar("Added to compare", {
        variant: "success",
      });
    } else {
      dispatch(removeCompareItem(item.id));
    }
  };

  // HEART
  let addWishes = (product) => {
    dispatch(addToHeart(product));
  };

  return (
    <div className="products">
      {popup && <Popup setPopup={setPopup} data={popup} />}
      {productsData.map((item, index) => (
        <div className="productItem" key={index}>
          {item.discount > 0 && <p className="discount">{item.discount} %</p>}
          <div className="product_action">
            {heart.some((i) => i.id === item.id) ? (
              <FaHeart
                style={{ color: "#c90606" }}
                onClick={() => dispatch(removeFromHeart(item.id))}
              />
            ) : (
              <FaRegHeart onClick={() => addWishes(item)} />
            )}

            <IoStatsChart
              style={{
                color: compareData.some((i) => i.id === item.id)
                  ? "#c90606"
                  : "black",
              }}
              onClick={() => addToCompareProduct(item)}
            />
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
            <button onClick={() => setPopup(item)} className="shopping">
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
