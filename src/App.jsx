import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Compare from "./routes/compare/Compare";
import Cart from "./routes/cart/Cart";
import Heart from "./routes/heart/Heart";
import Login from "./routes/login/Login";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
