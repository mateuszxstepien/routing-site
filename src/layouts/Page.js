import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductListPage />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Page;
