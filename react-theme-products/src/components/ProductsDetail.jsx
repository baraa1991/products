import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail(props) {
  const { productID } = useParams();

  const product = products.filter(item => item._id === Number(productID));
  console.log(product);
  return (
 <div className="mt-5">
      <h1 class="mb-5">Products Details :</h1>
      <h2>{product[0].title}</h2>
      <p>{product[0].detail}</p>
      <img src ={product[0].imgURL} />
  </div>
  );
}
export default ProductDetail;


