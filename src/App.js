import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/cart";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

const App = () => {
  const [cart, setCart] = React.useState([]);

  const addItem = (productId) => {
    // Make a copy of the current cart (to avoid direct mutation)
    const updatedCart = [...cart];

    // Check if the product is already in the cart
    const existingProduct = updatedCart.find((item) => item.id === productId);

    if (existingProduct) {
      // If product exists, increase its quantity
      const newCart = updatedCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1, // Add 1 to the quantity
          };
        }
        return item;
      });
      setCart(newCart); // Update the cart state
    } else {
      // If product is not in the cart, add it with quantity 1
      updatedCart.push({
        id: productId,
        quantity: 1,
      });
      setCart(updatedCart); // Update the cart state
    }
  };

  const clearAll = () => {
    setCart([]);
  };

  const value = React.useMemo(() => ({ cart, addItem, clearAll }), [cart]);

  return (
    <div className="App">
      <Router>
        <CartProvider value={value}>
          <Navbar />
          <Menu />
          <AppRoutes />
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
};

export default App;
