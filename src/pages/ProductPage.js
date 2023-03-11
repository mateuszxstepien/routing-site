import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {
  let { id } = useParams();
  return (
    <>
      <div>Strona produktu</div>
      <Product id={`${id}`} />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
