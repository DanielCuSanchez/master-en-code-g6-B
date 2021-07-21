import React from "react";
import "./CardProduct.css";
import { Link } from "react-router-dom";
import { useUserContext } from "./../../context/userContext";
export const CardProduct = (props) => {
  const { product_name, price, category, image, _id } = props;

  const { addToCart } = useUserContext();

  const handlerProduct = () => {
    const productToAdd = props;
    addToCart(productToAdd);
  };
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-3">
      <div className="card card-product">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {product_name.length > 20
              ? product_name.slice(0, 20)
              : product_name}
          </h5>
          <p className="card-text">{category ? category : "Comida"}</p>
          <p className="card-text">${price}</p>
          <button
            onClick={handlerProduct}
            className="btn btn-primary btn-app-primary"
          >
            Agregar al carrito
          </button>
          <Link
            to={`/product/${_id}`}
            className="ml-2 btn  outline-app-primary"
          >
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
