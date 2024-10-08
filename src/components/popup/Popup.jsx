import React from "react";
import "./Popup.css";
import { FiX } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
import { addToCart } from "../../context/cartSlice";
import { useDispatch } from "react-redux";

const Popup = ({ setPopup, data }) => {
  const dispatch = useDispatch();

  return (
    <div className="popup">
      <div className="popup_content">
        <FiX className="close" onClick={() => setPopup(false)} />
        <h1>{data.title}</h1>
        <div className="popup_actions">
          <button>
            <IoStatsChart /> Taqqoslashga qo'shish
          </button>
          <button>
            <FaRegHeart /> Saralanganlarga qo'shish
          </button>
          <button>
            <IoIosShareAlt /> Ulashish
          </button>
        </div>
        <div className="popup_details">
          <div className="left">
            <img src={data.img} alt="" />
            <div className="popupImages">
              {data.allImages.map((item, index) => (
                <img key={index} src={item} alt="" />
              ))}
            </div>
          </div>
          <div className="right">
            <h1>{data.price}</h1>
            <span>Rangi:</span>
            <div className="popupImages">
              {data.allImages.map((item, index) => (
                <img key={index} src={item} alt="" />
              ))}
            </div>
            <span>Xotira:</span>
            <div className="btn_container_popup">
              <button>8/256 gb</button>
              <button>16/256 gb</button>
            </div>

            <button onClick={() => dispatch(addToCart(data))}>
              Savatga qo'shish
            </button>

            <Link to={`/singlepage/${data.id}`} className="Maxsulot">
              Mahsulotga o'tish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
