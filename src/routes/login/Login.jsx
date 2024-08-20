import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "./Login.css";

function Login() {
  const [phone, setPhone] = useState("");

  return (
    <div className="login">
      <div className="login_main">
        <h1>Tizimga kirish yoki profil yaratish</h1>
        <div className="cart_form_item">
          <label>Telefon</label>
          <PhoneInput
            defaultCountry="uz"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        <button className="login_btn">Tasdiqlash</button>
      </div>
    </div>
  );
}

export default Login;
