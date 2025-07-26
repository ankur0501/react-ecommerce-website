import React from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../context/cart";
import { useSelectedProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import "./Cart.css";

function CartItem({ product }) {
  return (
    <div className="cart-item">
      <img
        className="product-image-cart"
        src={product.image}
        alt={product.name}
      />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>$ {product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    </div>
  );
}

function CartList({ products, cart, handleClose, clearAll }) {
  const history = useHistory();
  if (!products.length)
    return (
      <div className="empty-cart">
        <h3>Cart is empty! Start shopping 😀</h3>
      </div>
    );

  const updatedProducts = products.map((product) => {
    const item = cart.find((item) => item.id === product.id);
    product.quantity = item.quantity;
    product.total = item.quantity * product.price;
    return product;
  });

  const total = updatedProducts
    .map((item) => item.total)
    .reduce((prev, next) => prev + next);

  const checkout = () => {
    handleClose();
    history.push("/checkout");
  };

  return (
    <div className="cart-list">
      <h2>Items in Cart: {updatedProducts.length}</h2>
      <div className="cart-content">
        <div className="cart-items">
          {updatedProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <div className="cart-summary">
          <p className="total">Total: $ {total.toFixed(2)}</p>
          <button
            onClick={() => {
              handleClose();
              history.push("/checkout");
            }}
          >
            ✅ Checkout
          </button>
          <button
            onClick={() => {
              clearAll();
              handleClose();
            }}
          >
            🧹 Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Cart({ open, handleClose }) {
  const { cart, clearAll } = React.useContext(CartContext);
  const { response: products, loading } = useSelectedProducts(cart);

  if (!open) return null;

  return (
    <div className="cart-modal">
      <div className="cart-header">
        <button className="close-button" onClick={handleClose}>
          ✖
        </button>
        <h2>Cart</h2>
      </div>
      <div className="cart-body">
        {loading ? (
          <Loading text="Loading your cart..." />
        ) : (
          <CartList
            products={products}
            cart={cart}
            clearAll={clearAll}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
