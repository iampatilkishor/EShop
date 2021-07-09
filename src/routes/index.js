import { Route, BrowserRouter as Router } from "react-router-dom";

import ProductList from "./ProductListing";
import ProductDetails from "Containers/Product/ProductDetails";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={ProductList}></Route>
      <Route path="/product/:id" component={ProductDetails}></Route>
    </Router>
  );
}
