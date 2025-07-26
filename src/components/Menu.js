import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css"; // External CSS

export default function Menu() {
  const location = useLocation();
  const currentTab = location.state?.category;

  const tabs = [
    { label: "Men’s Style", value: "men's clothing" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Gadgets & Tech", value: "electronics" },
    { label: "Women’s Picks", value: "women's clothing" },
  ];

  return (
    <div className="menu-container">
      {tabs.map((tab) => (
        <Link
          key={tab.value}
          to={{
            pathname: `/products/${tab.value}`,
            state: { category: tab.value },
          }}
          className={`tab ${currentTab === tab.value ? "tab-selected" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
