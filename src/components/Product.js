import React from "react";

const Product = (props) => {
  return (
    <article className="product">
      <h1>
        {`${props.id}` === "car"
          ? "Nejlepsze samochody"
          : `${props.id}` === "motorcycle"
          ? "Najlepsze motory"
          : `${props.id}` === "bike"
          ? "Najlepsze rowery"
          : "Nie znaleziono"}
      </h1>
    </article>
  );
};

export default Product;
