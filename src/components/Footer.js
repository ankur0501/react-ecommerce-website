import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer glow-footer">
      <div className="footer-content">
        <p className="footer-text pulse-text">
          &copy; {new Date().getFullYear()} ShopMate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
