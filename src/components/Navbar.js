import React from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart";
import Cart from "./Cart";
import Menu from "./Menu";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = React.useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="navbar glowwave">
      <div className="navbar-container">
        <h1 className="navbar-title pulse-text">
          <Link to="/" className="navbar-link">
            🛍️ ShopMate
          </Link>
        </h1>

        {/* 💥 Menu replaces static links */}
        <div className="navbar-menu">
          <Menu />
        </div>

        <button className="cart-button hover-pop" onClick={handleClickOpen}>
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
