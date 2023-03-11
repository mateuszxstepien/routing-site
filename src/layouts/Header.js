import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const Header = () => {
  const image = [img1, img2, img3];
  const Img = () => {
    const index = Math.floor(Math.random() * 3);
    const img = image[index];
    return <img src={img} alt="miasto"></img>;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Img />}></Route>
        <Route path="/products" element={<Img />}></Route>
        <Route path="/contact" element={<Img />}></Route>
        <Route path="/admin" element={<Img />}></Route>
        <Route path="/*" element={<Img />}></Route>
      </Routes>
    </>
  );
};

export default Header;
