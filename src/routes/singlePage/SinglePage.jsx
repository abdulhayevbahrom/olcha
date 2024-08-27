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
import { Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";

function SinglePage() {
  const params = useParams();
  const item = productsData?.find((el) => el.id == params.id);
  // const [imgs, setImgs] = useState(item.about_product[0.0]);

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
      <div className="single-main">
        <div className="single_left">
          <img src={item.img} alt="" />
        </div>
        <div className="single_center">
          <div className="product-info">
            <div className="details_row">
              <p>Doimiy xotira hajmi:</p>
              <div>
                <button>128GB</button>
                <button>512GB</button>
                <button>256GB</button>
                <button>1TB</button>
              </div>
            </div>
            <div className="details_colors">
              <p>Rangi:</p>
              <div>
                {item.allImages.map((i) => (
                  <img className="details_colors-img" src={i} alt="" />
                ))}
              </div>
            </div>
            <div className="product-father">
              <div className="product-box">
                <div>
                  <p>O‘lchami</p>
                  <div className="product-child"></div>
                </div>
                <p>146.6x70.6x8.25 mm</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Vazni</p>
                  <div className="product-child"></div>
                </div>
                <p>187 g</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Operatsion sistema versiyasi</p>
                  <div className="product-child"></div>
                </div>
                <p>iOS 17</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Rangi</p>
                  <div className="product-child"></div>
                </div>
                <p>Natural titanium</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Face ID Datchigi</p>
                  <div className="product-child"></div>
                </div>
                <p>Mavjud</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Rangi</p>
                  <div className="product-child"></div>
                </div>
                <p>Blue titanium</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Rangi</p>
                  <div className="product-child"></div>
                </div>
                <p>White titanium</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Rangi</p>
                  <div className="product-child"></div>
                </div>
                <p>Black titanium</p>
              </div>
              <div className="product-box">
                <div>
                  <p>Namlikdan chimoya</p>
                  <div className="product-child"></div>
                </div>
                <p>Mavjud, IP68</p>
              </div>
              <Link to={"/"}>Barcha xususiyatlarini ko'rish</Link>
            </div>
          </div>
        </div>
        <div className="product-pricing">
          <div className="product-widger">
            <h2 className="pro-price">{item.price} so'm</h2>
            <p>Yetkazib berish to'g'risida ma'lumot:</p>
            <div className="widget-item">
              <img
                src={
                  "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%2012.5V17.5C1%2017.7652%201.10536%2018.0196%201.29289%2018.2071C1.48043%2018.3946%201.73478%2018.5%202%2018.5H3C3%2019.2956%203.31607%2020.0587%203.87868%2020.6213C4.44129%2021.1839%205.20435%2021.5%206%2021.5C6.79565%2021.5%207.55871%2021.1839%208.12132%2020.6213C8.68393%2020.0587%209%2019.2956%209%2018.5H15C15%2019.2956%2015.3161%2020.0587%2015.8787%2020.6213C16.4413%2021.1839%2017.2044%2021.5%2018%2021.5C18.7956%2021.5%2019.5587%2021.1839%2020.1213%2020.6213C20.6839%2020.0587%2021%2019.2956%2021%2018.5H22C22.2652%2018.5%2022.5196%2018.3946%2022.7071%2018.2071C22.8946%2018.0196%2023%2017.7652%2023%2017.5V5.5C23%204.70435%2022.6839%203.94129%2022.1213%203.37868C21.5587%202.81607%2020.7956%202.5%2020%202.5H11C10.2044%202.5%209.44129%202.81607%208.87868%203.37868C8.31607%203.94129%208%204.70435%208%205.5V7.5H6C5.53426%207.5%205.07493%207.60844%204.65836%207.81672C4.24179%208.025%203.87944%208.32741%203.6%208.7L1.2%2011.9C1.17075%2011.9435%201.14722%2011.9905%201.13%2012.04L1.07%2012.15C1.02587%2012.2615%201.00216%2012.3801%201%2012.5ZM17%2018.5C17%2018.3022%2017.0586%2018.1089%2017.1685%2017.9444C17.2784%2017.78%2017.4346%2017.6518%2017.6173%2017.5761C17.8%2017.5004%2018.0011%2017.4806%2018.1951%2017.5192C18.3891%2017.5578%2018.5673%2017.653%2018.7071%2017.7929C18.847%2017.9327%2018.9422%2018.1109%2018.9808%2018.3049C19.0194%2018.4989%2018.9996%2018.7%2018.9239%2018.8827C18.8482%2019.0654%2018.72%2019.2216%2018.5556%2019.3315C18.3911%2019.4414%2018.1978%2019.5%2018%2019.5C17.7348%2019.5%2017.4804%2019.3946%2017.2929%2019.2071C17.1054%2019.0196%2017%2018.7652%2017%2018.5ZM10%205.5C10%205.23478%2010.1054%204.98043%2010.2929%204.79289C10.4804%204.60536%2010.7348%204.5%2011%204.5H20C20.2652%204.5%2020.5196%204.60536%2020.7071%204.79289C20.8946%204.98043%2021%205.23478%2021%205.5V16.5H20.22C19.9388%2016.1906%2019.5961%2015.9435%2019.2138%2015.7743C18.8315%2015.6052%2018.418%2015.5178%2018%2015.5178C17.582%2015.5178%2017.1685%2015.6052%2016.7862%2015.7743C16.4039%2015.9435%2016.0612%2016.1906%2015.78%2016.5H10V5.5ZM8%2011.5H4L5.2%209.9C5.29315%209.7758%205.41393%209.675%205.55279%209.60557C5.69164%209.53615%205.84475%209.5%206%209.5H8V11.5ZM5%2018.5C5%2018.3022%205.05865%2018.1089%205.16853%2017.9444C5.27841%2017.78%205.43459%2017.6518%205.61732%2017.5761C5.80004%2017.5004%206.00111%2017.4806%206.19509%2017.5192C6.38907%2017.5578%206.56725%2017.653%206.70711%2017.7929C6.84696%2017.9327%206.9422%2018.1109%206.98079%2018.3049C7.01937%2018.4989%206.99957%2018.7%206.92388%2018.8827C6.84819%2019.0654%206.72002%2019.2216%206.55557%2019.3315C6.39112%2019.4414%206.19778%2019.5%206%2019.5C5.73478%2019.5%205.48043%2019.3946%205.29289%2019.2071C5.10536%2019.0196%205%2018.7652%205%2018.5ZM3%2013.5H8V16.28C7.40983%2015.7526%206.63513%2015.4797%205.84469%2015.5209C5.05425%2015.5621%204.31212%2015.914%203.78%2016.5H3V13.5Z'%20fill='%23111111'/%3e%3c/svg%3e"
                }
                alt=""
              />
              <div className="item-head">
                <h4>Standart yetkazib berish</h4>
                <p>Manzilga qarab 4 soatdan 3 kungacha yetkazib beriladi</p>
              </div>
            </div>
            <div className="text-not"></div>
            <button className="item-green">
              <RiShoppingBag3Line /> Savatchaga qo'shish
            </button>
            <button className="item-click">Bir klikda sotib olish</button>
          </div>
          <div className="olcha-widget">
            <div className="widget-title">
              <p>Bo'lib to'lash:</p>
              <h2>{Math.round(item.price / 12)} so'm / 12 oy.</h2>
            </div>
            <img
              src={
                "https://olcha.uz/image/original/instalment-systems/olcha-logo.svg"
              }
              alt=""
            />
            <div className="xbox"></div>
            <button className="widget-btn">Bo'lib to'lash</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
