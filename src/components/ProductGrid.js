import React from "react";
import GridItem from "./GridItem";
import "./ProductGrid.css"; // External CSS

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id}>
          <GridItem product={product} />
        </div>
      ))}
    </div>
  );
}
