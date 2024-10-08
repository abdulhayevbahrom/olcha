import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import img6 from "../../../assets/6.jpg";
import img7 from "../../../assets/7.jpg";
import img8 from "../../../assets/8.jpg";
import img9 from "../../../assets/9.jpg";

const Carousel = () => {
  let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
