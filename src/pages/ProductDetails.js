import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useProduct, useProductsWithCategory } from "../hooks/useProducts";
import Loading from "../components/Loading";
import ProductSuggestions from "../components/ProductSuggestions";
import CardContext from "../context/cart";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const { productId, category } = useParams();
  const { response: product, loading: productLoading } = useProduct(productId);
  const { response: products, loading: productsLoading } =
    useProductsWithCategory(category);
  const { addItem } = useContext(CardContext);

  const loadingState = productLoading || productsLoading;

  if (loadingState) {
    return <Loading text="Fetching your product..." />;
  }

  return (
    <div className="product-details">
      <div className="product-card">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <h3 className="price">
            ₹ {product.price}{" "}
            <span className="tax-note">(Including all taxes)</span>
          </h3>
          <button onClick={() => addItem(product.id)} className="add-btn">
            🛒 Add to Cart
          </button>
          <hr />
          <h4>Description</h4>
          <p className="description">{product.description}</p>
        </div>
      </div>

      <div className="related-section">
        <h3>Related Products</h3>
        <ProductSuggestions
          products={products.filter(({ id }) => id !== product.id)}
        />
      </div>
    </div>
  );
};
