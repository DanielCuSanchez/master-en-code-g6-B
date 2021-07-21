import React, { useEffect, useState } from "react";
import { getItems } from "../services/items.service";
import { CardProduct } from "./../components/CardProduct/index";

export const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getItems()
      .then((products) => setProducts(products))
      .catch((error) => {
        console.error(error);
        setProducts([]);
      });
  }, []);

  return (
    <div className="container">
      <div className="row products-section">
        {products ? (
          products.length !== 0 ? (
            products.map((product, key) => (
              <CardProduct key={key} {...product} />
            ))
          ) : (
            <p>There are no products</p>
          )
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};
