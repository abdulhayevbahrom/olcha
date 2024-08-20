import React from "react";
import "./Compare.css";

function Compare() {
  return (
    <div className="compare">
      <h1>Tovarlarni solishtirish</h1>
      <div className="compare_wrapper">
        <div className="wrapper_childe">
          <img src={"https://olcha.uz/_nuxt/empty-icon.DX6S2-bK.png"} alt="" />
          <h2>Afsuski, bunday mahsulot hozirda mavjud emas.</h2>
          <p>
            Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi
            mumkin
          </p>
          <button className="copare_btn">Asosiy sahifaga</button>
        </div>
      </div>
    </div>
  );
}

export default Compare;
