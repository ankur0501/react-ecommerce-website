import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Checkout } from "./pages/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/order-success" component={OrderSuccess} />

      {/* More specific route first */}
      <Route exact path="/products/:category" component={Products} />
      <Route exact path="/:category/:productId" component={ProductDetails} />

      {/* 404 Catch-all */}
      <Route component={NotFound} />
    </Switch>
  );
}
