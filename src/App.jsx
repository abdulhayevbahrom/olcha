import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Compare from "./routes/compare/Compare";
import Cart from "./routes/cart/Cart";
import Heart from "./routes/heart/Heart";
import Login from "./routes/login/Login";
import SinglePage from "./routes/singlePage/SinglePage";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/compare" element={<Compare />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singlepage/:id" element={<SinglePage />} /> */}
      </Routes>
    </div>
  );
}
export default App;
