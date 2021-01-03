import React from "react";
import { products } from "../data/products";
import { Link, Switch, Route } from "react-router-dom";
import ProductDetail from "./ProductsDetail";
import { useParams } from "react-router-dom";

function Products(props) {
 
  const productsMap = products.map(item => (
    <li>
      <Link to={`/products/${item._id}`}>{item.title}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Products</h1>
      <hr />
      {productsMap}
      <Switch>
        <Route path="/products/:productID">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default Products;
