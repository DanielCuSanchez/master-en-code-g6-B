import React from "react";
import { useUserContext } from "./../context/userContext";

export const Cart = () => {
  const { handleAddToCart, cart } = useUserContext();

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
          {cart.length === 0
            ? "Carrito vacio"
            : cart.map((product) => (
                <div class="card">
                  <div class="row">
                    <div class="col-md-4">
                      <h6 class="card-title">{product.product_name}</h6>
                    </div>
                    <div class="col-md-4">{product.quantity}</div>
                    <div class="col-md-4"> $ {product.price}</div>
                  </div>
                </div>
              ))}

          <div class="card">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <h4 class="card-title">Total</h4>
                </div>
                <div class="offset-md-4 col-md-4">$ {cartTotal()}</div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-app-primary"
            onClick={handlerContinueShop}
          >
            {cart.length === 0 ? "Añade articulos" : "Continuar con la compra"}
          </button>
        </div>
      </div>
    </div>
  );
};
