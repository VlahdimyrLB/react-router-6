import React from "react";
import { Link } from "react-router-dom";
import products from "../data.js";

const Products = () => {
  return (
    <section className="section">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/Products/${product.id}`}>More Info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
