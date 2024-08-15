import React from "react";
import HeaderTop from "./HeaderTop";
import "./Header.css";
import headerLogo from "../../assets/headerLogo.png";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import { HiMiniBars3 } from "react-icons/hi2";
import { useTypewriter } from "react-simple-typewriter";

function Header() {
  const [text] = useTypewriter({
    words: ["Muzlatgich", "Televizor", "Telefon", "Kompyuter", "Sichqoncha"],
    loop: 0,
  });

  return (
    <div className="header">
      <HeaderTop />
      <header>
        <Link to={"/"}>
          <img src={headerLogo} alt="header logo" className="headerLogo" />
        </Link>
        <button className="catalog">
          <HiMiniBars3 /> Katalog
        </button>
        <div className="header_searchbar">
          <input type="text" placeholder={text} />
          <button>
            <FiSearch />
          </button>
        </div>
        <div className="header_actions">
          <Link to={"/compare"}>
            <IoStatsChart />
            <span>Taqqoslash</span>
          </Link>
          <Link to={"/heart"}>
            <FaRegHeart />
            <span>Sevimlilar</span>
          </Link>
          <Link to={"/cart"}>
            <p>0</p>
            <LuShoppingCart />
            <span>Savatcha</span>
          </Link>
          <Link to={"/login"}>
            <LuUser2 />
            <span>Kirish</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
