import React, { useRef, useState } from "react";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { FaRegStar } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LiaShareSolid } from "react-icons/lia";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function SinglePage() {
  const params = useParams();
  const item = productsData?.find((el) => el.id == params.id);
  console.log(item);
  return (
    <div className="singlePage">
      <h2>{item.title}</h2>
      <div className="main">
        <p className="main_p">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar /> 0 sharhlar
        </p>
        <div className="main_child">
          <p>
            <IoStatsChart /> Taqqoslashga qo'shish
          </p>
          <p>
            <FaRegHeart /> Saralanganlarga qo'shish
          </p>
          <p>
            <LiaShareSolid /> Ulashish
          </p>
        </div>
      </div>
      <div className="single_left">
        <img src={item.img} alt="" />
      </div>
      <div className="single_center">
        <div className="details_row">
          <p>Объем встроенной памяти:</p>
          <button>128GB</button>
          <button>512GB</button>
          <button>256GB</button>
          <button>1TB</button>
        </div>
        <div className="details_colors">
          <p>Rangi:</p>
          {item.allImages.map((i) => (
            <img src={i} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
