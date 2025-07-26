import React from "react";
import GridItem from "./GridItem";
import "./ProductSuggestions.css";

export default function ProductSuggestions({ products }) {
  return (
    <div className="suggestions-container">
      {products.map((product) => (
        <div className="suggestion-item" key={product.id}>
          <GridItem product={product} />
        </div>
      ))}
    </div>
  );
}
