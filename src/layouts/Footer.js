import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "../styles/Footer.css";

const Url = () => {
  let { id } = useParams();
  return (
    <p>
      Jesteś na{" "}
      <span>
        {`${id}` === "products"
          ? "stronie z produktami"
          : `${id}` === "car"
          ? "stronie z samochodami"
          : `${id}` === "bike"
          ? "stronie z rowerami"
          : `${id}` === "motorcycle"
          ? "stronie z motorami"
          : `${id}` === "contact"
          ? "stronie z kontaktem"
          : `${id}` === "login"
          ? "stronie logowania"
          : `${id}` === "admin"
          ? "stronie administratora"
          : "stronie głównej"}
      </span>
    </p>
  );
};

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route path="/" element={<Url />} />
        <Route path="/:id" element={<Url />} />
        <Route path="/product/:id" element={<Url />} />
      </Routes>
    </div>
  );
};

export default Footer;
