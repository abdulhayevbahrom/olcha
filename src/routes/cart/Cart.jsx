import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Cart = () => {
  const [phone, setPhone] = useState("");
  let cart = [2];
  return (
    <div className="cart">
      {cart.length ? (
        <div className="cart_wrapper">
          <div className="cart_wrapper_left">
            <div className="cart_section">
              <h1 className="section_header">
                Savatchada {cart.length} ta mahsulot bor
              </h1>
              <div className="section_list">
                <div className="section_list_item">
                  <img
                    src="https://olcha.uz/image/original/products/supplier/stores/1/2023-11-27/MvJ7NTTMbUfAGFz5Np1RbCm1vZnhpOGKCHSvt8pjTlHTG27cmd8ZXv2ANRqU.jpg"
                    alt=""
                  />
                  <div className="section_item_info">
                    <Link to={"/"}>Honor X7b Emerald Green 8/128 GB</Link>
                    <p>vendor code</p>
                    <div className="section_item_actions">
                      <button>Sevimlilarga qo'shish</button>
                      <button>o'chirish</button>
                    </div>
                  </div>
                  <div className="section_item_count">
                    <button>
                      <FaMinus />
                    </button>
                    <p>1</p>
                    <button>
                      <FaPlus />
                    </button>
                  </div>
                  <div className="section_item_price">
                    <p>12345432 so'm</p>
                    <s>12345432 so'm</s>
                  </div>
                </div>
                <div className="section_list_item">
                  <img
                    src="https://olcha.uz/image/original/products/supplier/stores/1/2023-11-27/MvJ7NTTMbUfAGFz5Np1RbCm1vZnhpOGKCHSvt8pjTlHTG27cmd8ZXv2ANRqU.jpg"
                    alt=""
                  />
                  <div className="section_item_info">
                    <Link to={"/"}>Honor X7b Emerald Green 8/128 GB</Link>
                    <p>vendor code</p>
                    <div className="section_item_actions">
                      <button>Sevimlilarga qo'shish</button>
                      <button>o'chirish</button>
                    </div>
                  </div>
                  <div className="section_item_count">
                    <button>
                      <FaMinus />
                    </button>
                    <p>1</p>
                    <button>
                      <FaPlus />
                    </button>
                  </div>
                  <div className="section_item_price">
                    <p>12345432 so'm</p>
                    <s>12345432 so'm</s>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart_form">
              <h1>Sizning malumotlaringiz</h1>
              <form>
                <div className="cart_form_item">
                  <label>Ims va Familiya</label>
                  <input type="text" />
                </div>
                <div className="cart_form_item">
                  <label>Telefon</label>
                  <PhoneInput
                    defaultCountry="uz"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="cart_wrapper_right">
            <div className="cart_wrapper_right_price_head">
              <h2>Jami</h2>
              <h2>999990s so'm</h2>
            </div>
            <span className="discount">Tejovingiz: 12324232 so'm</span>
            <form className="promoForm">
              <input type="text" placeholder="promokodni kirgizing" />
              <button>Kiritish</button>
            </form>
            <ul className="details">
              <li>
                <b>Qiymayti:</b>
                <p>9 094 000 so'm</p>
              </li>
              <li>
                <b>Promokod::</b>
                <p>9 094 000 so'm</p>
              </li>
              <li>
                <b>Ishlatilgan bonus:</b>
                <p>9 094 000 so'm</p>
              </li>
              <li>
                <b>
                  Naqd pul to'lash uchun <br /> komissiya miqdori:
                </b>
                <p>9 094 000 so'm</p>
              </li>
              <li>
                <b>Yetkazib berish summasi:</b>
                <p>9 094 000 so'm</p>
              </li>
            </ul>
            <ul className="details">
              <li>
                <b>Yetkazib berish:</b>
                <p>Kurer orqali yetqazib berish</p>
              </li>
              <li>
                <b>To'lov turi:</b>
                <select>
                  <option value="">Karta orqali</option>
                  <option value="">Naqt</option>
                </select>
              </li>
              <li>
                <b>Buyurtma turi:</b>
                <p>To'liq to'lash</p>
              </li>
            </ul>
            <button className="orderBtn">Buyurtma berish</button>
            <span className="cart_ofertaText">
              "Buyurtma berish" tugmasi bosish orqali{" "}
              <Link to={"/"}> ommaviy taklif shartnomasiga</Link> roziman
            </span>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <img src={"https://olcha.uz/_nuxt/cart.DYGF4swC.png"} alt="" />
          <h1>Savatchangiz bo'sh</h1>
          <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
          <Link to={"/"}>Asosiy sahifaga</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
