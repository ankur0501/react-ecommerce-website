import React from "react";
import "./NotFound.css";

export default function NotFound() {
  console.log("not found");
  return (
    <div className="not-found-wrapper">
      <div className="error-card">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <button onClick={() => (window.location.href = "/")}>
          🔙 Go Back Home
        </button>
      </div>
    </div>
  );
}
