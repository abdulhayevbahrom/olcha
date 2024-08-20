import React, { useEffect, useState } from "react";
import "./DaysProduct.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import Soat from "./Soat";

function DaysProduct() {
  let daysProducts = [
    {
      img: "https://olcha.uz/image/220x220/products/2020-08-14/stiralnaya-mashina-lg-ai-dd-f2t9gw9p-85-kg-15320-0.jpeg",
      title: "Kir mashina",
      price: 3400000,
    },
    {
      img: "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-10/uh75tCNv0N7JrfccEsnGN1d9yZ5B1YVr3D3or60ctXceVOtIzfUDrkpk3aMb.JPG",
      title: "Kompyuter",
      price: 3400000,
    },
    {
      img: "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-03-25/Q4vVLdtjhuePE429S6VCdlvW68tjcDvYgPuZEb1LV1eshQOYdVSboVbQzmmr.jpg",
      title: "Kitob",
      price: 34000,
    },
  ];

  return (
    <div className="daysProduct">
      <div className="caption">
        <h3>Kun mahsuloti</h3>
        <Soat hours={15} />
      </div>

      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {daysProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="daysProItem">
              <img src={product.img} alt="" />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{Math.round(product.price / 12)} so'm x 12 oy</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DaysProduct;
