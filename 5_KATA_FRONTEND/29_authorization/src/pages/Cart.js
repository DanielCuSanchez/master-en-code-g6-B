import React from "react";
import { useUserContext } from "./../context/userContext";

export const Cart = () => {
  const {
    cartObject: { cart },
  } = useUserContext();

  const cartTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    return total;
  };
  const handlerContinueShop = () => {
    alert("Haz finalizado tu pago");
  };
  return (
    <div className="container">
      <div className="row cart-section">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Carrito</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Lista de articulos
            </h6>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h6 className="card-title">Articulo</h6>
            </div>
            <div className="col-md-4">Cantidad</div>
            <div className="col-md-4"> Precio unitario</div>
          </div>
          {cart.length === 0
            ? "Carrito vacio"
            : cart.map((product, key) => (
                <div key={product._id} className="card">
                  <div className="row">
                    <div className="col-md-4">
                      <h6 className="card-title">{product.product_name}</h6>
                    </div>
                    <div className="col-md-4">{product.quantity}</div>
                    <div className="col-md-4"> $ {product.price}</div>
                  </div>
                </div>
              ))}

          <div className="card">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h4 className="card-title">Total</h4>
                </div>
                <div className="offset-md-4 col-md-4">$ {cartTotal()}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary btn-app-primary"
          onClick={handlerContinueShop}
          disabled={cart.length === 0}
        >
          {cart.length === 0 ? "Añade articulos" : "Continuar con la compra"}
        </button>
      </div>
    </div>
  );
};
