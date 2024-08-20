import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Categories.css";
import { Link } from "react-router-dom";

export default function Categories() {
  const ItemData = [
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png",
      title: "Televizor, fotovideo va audio",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/bMNspthi79FTau9LHHWwROUmJxcI9s67zBhAw7hPxONfHOpouAPSz1XBmg0Q.png",
      title: "Kitoblar",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/adqzcIrhpWBLdv7My9MHp7DblhCNpQg2KkpsoeRQZdvKe5OR01jO2oXkKgcn.png",
      title: "Kreslolar",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/H36mM5MMLXtOjeOWB3Qm4FVp2ePbeijqE7VciIfLRsU5E4AAoPmf9avFASAg.png",
      title: "Klaviatura",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ioFNdT48mMJa0ARcbtJXbnLZN8CUB9x09SFDzFv06MJXreLROUEhytRsKavH.png",
      title: "Maxsus anjomlar",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/4x0BCXOswam7ZF6HtQbbbkBfwFiClO2DCP6jY4F9sGt5P3VG0qUf1u27iCFq.png",
      title: "Kantselyariya tovarlari",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ffn8LREBuqMNdbVFBdddB9BtV9eUM3IygL94CozDRxgwgjQiAyzfPtyWWkQe.png",
      title: "Electrotransport",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/cBKUy2UyHjgTu7n0E4ZEtbo1Priwsl5oynQrRtxl6MixwxwknCUbTfyDJiKx.png",
      title: "Sovg'alar va Suvenirlar",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/g8nf8o2xpmFB6FaaAy60UUZWKqLzXhEEOqIc2RdAEp7s0r7ETvdBkvkmBvIB.png",
      title: "Aqlli uy",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/1fxknIjYSCNtNw0XfYPubvN9yhsaSAYsHryekFcTORSOgIcZ81NpuE2E96ee.png",
      title: "Qulay takliflar",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Hkq1VNk2xXNORQ17hf2DdCTcix59JdQgR3SfdXEiUJlfCEzzLlImQ3JbIxBh.png",
      title: "Oziq-ovqat maxsulotlar",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/HJTsWmx1CIypB4WMBEiOoBCesiNuHbL6jtU629x73GzrUAprGMIuI1z0EAUw.png",
      title: "Olcha Qo'ldan",
    },
    {
      img: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/gH70607VBCkecOmaKnLQXlzHcwipHiBuvNKfXnAZcGnsQuQ0zv5Wom5lSykN.png",
      title: "Avftomobillar",
    },
  ];

  return (
    <div className="categories">
      <Swiper
        slidesPerView={9}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {ItemData.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={"/"}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
