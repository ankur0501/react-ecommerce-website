import React from "react";
import { useParams } from "react-router-dom";
import { useProductsWithCategory } from "../hooks/useProducts";
import Loading from "../components/Loading";
import ProductGrid from "../components/ProductGrid";
import "./Products.css"; // custom styles if needed

export const Products = () => {
  const { category } = useParams();
  const { response: products, loading } = useProductsWithCategory(category);

  if (loading) {
    return <Loading text={`Fetching products for ${category}`} />;
  }

  return (
    <main className="products-page">
      <ProductGrid products={products} />
    </main>
  );
};
