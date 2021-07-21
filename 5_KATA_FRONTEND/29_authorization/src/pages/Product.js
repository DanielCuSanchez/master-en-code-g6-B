import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { getOneItem } from "../services/items.service";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();
  const { addToCart } = useUserContext();

  useEffect(() => {
    getOneItem(idProduct)
      .then((product) => setProduct(product))
      .catch((error) => {
        console.error(error);
        setProduct({});
      });
  }, [idProduct]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container product-section">
      <div className="row ">
        {product !== null ? (
          product.product_name ? (
            <div className=" card-product-section">
              <img src={product.image} className="card-img" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{product.product_name}</h3>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Categoría: {product.category}</p>
                <p className="card-text">Marca: {product.brand}</p>
                <h3>$ {product.price} </h3>
                <button
                  className="btn btn-primary btn-app-primary"
                  onClick={handleAddToCart}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ) : (
            <p>Hubo un error :c</p>
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
