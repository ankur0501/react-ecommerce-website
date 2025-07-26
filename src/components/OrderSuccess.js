import React from "react";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  return (
    <div className="order-success">
      <div className="success-icon">&#10004;</div>
      <h1>Thank You!</h1>
      <p>Your order has been placed successfully.</p>
      <button class="go-to-home" onClick={() => (window.location.href = "/")}>
        Go to Home
      </button>
    </div>
  );
}
