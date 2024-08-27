import React from "react";
import { Link } from "react-router-dom";
import { LangData } from "../../language/data";

function HeaderTop() {
  let lang = localStorage.getItem("lang") || "uz";

  const setLang = (til) => localStorage.setItem("lang", til);

  return (
    <div className="headerTop">
      <div className="btn_container">
        <button className="btn">0% {LangData[lang].muddatliTolov}</button>
        <button className="odd">{LangData[lang].chegirma}</button>
        <button className="btn">{LangData[lang].yutuqlioyin}</button>
        <Link to={"/"}>Sayt xaritasi</Link>
      </div>
      <div className="contact">
        <a href="tel+998712022021">+998 (71) 202 20 21</a>
        <button className="contact_btn">olcha da soting</button>
        <div className="header_lang">
          <button
            onClick={() => setLang("uz")}
            className={lang === "uz" ? "activeLang" : ""}
          >
            UZ
          </button>
          <button
            className={lang === "ru" ? "activeLang" : ""}
            onClick={() => setLang("ru")}
          >
            RU
          </button>
          <button
            className={lang === "eng" ? "activeLang" : ""}
            onClick={() => setLang("eng")}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
