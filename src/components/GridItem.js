import React from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../context/cart";
import "./GridItem.css";

export default function GridItem({ product }) {
  const history = useHistory();
  const cart = React.useContext(CartContext);
  const navigateUrl = `/${product.category}/${product.id}`;

  const addCart = (e) => {
    e.preventDefault();
    cart.addItem(product.id);
  };

  const buyNow = (e) => {
    history.push("/Checkout");
  };

  return (
    <div className="grid-card">
      <a
        href={navigateUrl}
        onClick={(e) => {
          e.preventDefault();
          history.push(navigateUrl, { category: product.category });
        }}
      >
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <div className="grid-content">
          <h4 className="product-title">{product.title}</h4>
          <div className="grid-footer">
            <p className="product-price">$ {product.price}</p>
          </div>
        </div>
      </a>
      <button className="buy-now-button" onClick={buyNow}>
        💸
        <span className="hover-text">Buy Now</span>
      </button>
      <button className="add-cart-button" onClick={addCart}>
        🛒
        <span className="hover-text">Add to Cart</span>
      </button>
    </div>
  );
}
