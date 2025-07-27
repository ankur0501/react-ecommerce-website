import React from "react";
import { useProductsWithLimit } from "../hooks/useProducts";
import ProductSuggestions from "../components/ProductSuggestions";
import Loading from "../components/Loading";
import "./Home.css";

export const Home = () => {
  const { response: products, loading } = useProductsWithLimit(5);

  if (loading) {
    return (
      <>
        <Loading text="Fetching top products" />
      </>
    );
  }

  return (
    <div className="home-wrapper glowwave-bg">
      <div className="sale-blaster">
        <h3 className="sale-text">🎉 Limited Time Big Sale!</h3>
        <p className="sale-subtext">
          Up to <span className="sale-percent">50% OFF</span> on top categories
        </p>
      </div>
      <div className="suggestions-wrapper">
        <ProductSuggestions products={products} />
      </div>
    </div>
  );
};
