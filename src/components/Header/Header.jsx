import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import "./Header.css";
import headerLogo from "../../assets/headerLogo.png";
import { FaBars, FaRegHeart, FaChevronRight } from "react-icons/fa";
import { FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import { useTypewriter } from "react-simple-typewriter";
import { headerData } from "../../data/headerData";
import { useSelector } from "react-redux";
import {
  productsData,
  accessories,
  households,
  mobilePhones,
  washingMachines,
} from "../../data/productsData";

function Header() {
  const cartData = useSelector((store) => store.cart);
  const compareData = useSelector((store) => store.compare);
  const heartData = useSelector((store) => store.heart);
  const [hdr_state, setHdrState] = useState(false);
  const [catalog, setCatalog] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const [text] = useTypewriter({
    words: ["Muzlatgich", "Televizor", "Telefon", "Kompyuter", "Sichqoncha"],
    loop: 0,
  });

  useEffect(() => setHdrState(window.scrollY >= 56), [window.scrollY]);
  let searching = (value) => {
    if (value === "" || value === " ") return setSearchResult([]);
    let res1 = productsData.filter((product) =>
      product.title.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
    let res2 = accessories.filter((product) =>
      product.title.trim().toLowerCase().includes(value.trim().toLowerCase())
    );

    let res3 = mobilePhones.filter((product) =>
      product.title.trim().toLowerCase().includes(value.trim().toLowerCase())
    );

    let res4 = households.filter((product) =>
      product.title.trim().toLowerCase().includes(value.trim().toLowerCase())
    );

    let res5 = washingMachines.filter((product) =>
      product.title.trim().toLowerCase().includes(value.trim().toLowerCase())
    );

    setSearchResult([...res1, ...res2, ...res3, ...res4, ...res5]);
  };

  useEffect(() => setHdrState(window.pageYOffset >= 56), [window.pageYOffset]);

  return (
    <div className="header">
      <HeaderTop />
      <header style={{ position: hdr_state ? "fixed" : "static" }}>
        <Link to={"/"}>
          <img src={headerLogo} alt="header logo" className="headerLogo" />
        </Link>
        <div onClick={() => setCatalog(!catalog)} className="catalogBtn">
          {catalog ? <FiX /> : <FaBars />}
          Katalog
        </div>
        <div className="header_searchbar">
          <input
            onChange={(e) => searching(e.target.value)}
            type="search"
            placeholder={text}
          />

          <button>
            <FiSearch />
          </button>

          {searchResult.length ? (
            <div className="search_result">
              {searchResult?.map((link, index) => (
                <Link
                  key={index}
                  onClick={() => setSearchResult([])}
                  to={`/singlepage/${link.id}`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="header_actions">
          <Link to={"/compare"}>
            {compareData.length ? <p>{compareData.length}</p> : <></>}
            <IoStatsChart />
            <span>Taqqoslash</span>
          </Link>
          <Link to={"/heart"}>
            {heartData.length ? <p>{heartData.length}</p> : <></>}
            <FaRegHeart />
            <span>Sevimlilar</span>
          </Link>
          <Link to={"/cart"}>
            <p>{cartData?.length}</p>
            <LuShoppingCart />
            <span>Savatcha</span>
          </Link>
          <Link to={"/login"}>
            <LuUser2 />
            <span>Kirish</span>
          </Link>
        </div>
      </header>

      {catalog && (
        <div className="catalog_wrapper">
          <div className="catalog_sidebar">
            {headerData.map((item, index) => (
              <div key={index} className="catalog_sidebar_item">
                <div className="catalog_sidebar_item_title">
                  <img src={item.icon} alt="" />
                  <span>{item.title}</span>
                </div>
                <FaChevronRight />

                <div className="extraLinks">
                  <h2>{item.title}</h2>
                  <div className="extra_wrapper">
                    {item.extra.map((link, index) => (
                      <div key={index} className="extra_item">
                        <h3>{link.caption}</h3>
                        {link.extra_links.map((url, index) => (
                          <Link key={index} to={url}>
                            {url}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
