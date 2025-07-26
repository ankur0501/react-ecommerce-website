import React from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart";
import Cart from "./Cart";
import "./Navbar.css"; // External CSS for styling

export default function Navbar() {
  const { cart } = React.useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">
          <Link to="/" className="navbar-link">
            🛍️ ShopMate
          </Link>
        </h1>
        <button className="cart-button" onClick={handleClickOpen}>
          <span className="badge">{cart.length}</span>
          <span role="img" aria-label="cart">
            🛒
          </span>
        </button>
      </div>
      {open && <Cart open={open} handleClose={handleClose} />}
    </header>
  );
}
