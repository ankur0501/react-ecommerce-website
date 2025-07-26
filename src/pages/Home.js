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
        <div className="banner"></div>
        <Loading text="Fetching top products" />
      </>
    );
  }

  return (
    <div className="home-wrapper">
      <div className="banner"></div>
      <h2 className="section-title">🔥 Top Products</h2>
      <div className="suggestions-wrapper">
        <ProductSuggestions products={products} />
      </div>
    </div>
  );
};
