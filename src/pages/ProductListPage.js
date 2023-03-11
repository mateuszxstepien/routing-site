import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = [
  { id: "car", name: "samochody" },
  { id: "motorcycle", name: "motory" },
  { id: "bike", name: "rowery" },
];

const ProductListPage = () => {
  const list = products.map((product) => (
    <li key={product.id}>
      <Link to={`/product/${product.id}`}>{product.name}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Lista produktów</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
