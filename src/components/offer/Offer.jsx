import React from "react";
import "./Offer.css";
import Triple1 from "../../assets/offer1.jpg";
import Triple2 from "../../assets/offer2.jpg";
import Triple3 from "../../assets/offer3.jpg";

const Offer = () => {
  return (
    <div className="tripleform">
      <div className="first_img">
        <img src={Triple1} alt="" />
      </div>
      <div className="first_img">
        <img src={Triple2} alt="" />
      </div>
      <div className="first_img">
        <img src={Triple3} alt="" />
      </div>
    </div>
  );
};

export default Offer;
