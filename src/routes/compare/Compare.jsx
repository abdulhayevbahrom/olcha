import React from "react";
import "./Compare.css";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/products/Products";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { clearCompare } from "../../context/compareSlice";

function Compare() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const compareData = useSelector((store) => store.compare);

  return (
    <div className="compare">
      <h1>Tovarlarni solishtirish</h1>
      {compareData.length ? (
        <>
          <div className="compareActions">
            <button onClick={() => navigate("/")}>
              <FaPlus /> Tovarlarni qo'shish
            </button>
            <button onClick={() => dispatch(clearCompare())}>
              <FaTrash /> Kategoriyani tozalash
            </button>
          </div>
          <div className="compareContainer">
            <Products productsData={compareData} />
          </div>
        </>
      ) : (
        <div className="compare_wrapper">
          <div className="wrapper_childe">
            <img
              src={"https://olcha.uz/_nuxt/empty-icon.DX6S2-bK.png"}
              alt=""
            />
            <h2>Afsuski, bunday mahsulot hozirda mavjud emas.</h2>
            <p>
              Mahsulot nomida xatolik yoki bizda hali bunday mahsulot
              boʻlmasligi mumkin
            </p>
            <button className="copare_btn" onClick={() => navigate("/")}>
              Asosiy sahifaga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compare;
