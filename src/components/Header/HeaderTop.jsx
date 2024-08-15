import React from "react";
import { Link } from "react-router-dom";

function HeaderTop() {
  return (
    <div className="headerTop">
      <div className="btn_container">
        <button className="btn">0% Muddatli to'lov</button>
        <button className="odd">Chegirmalar</button>
        <button className="btn">Yutuqli o'yinlar</button>
        <Link to={"/"}>Sayt xaritasi</Link>
      </div>
      <div className="contact">
        <a href="tel+998712022021">+998 (71) 202 20 21</a>
        <button className="contact_btn">olcha da soting</button>
        <div className="header_lang">
          <button className="activeLang">UZ</button>
          <button>RU</button>
          <button>EN</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
