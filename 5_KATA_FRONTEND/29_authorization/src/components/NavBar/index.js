import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import "./NavBar.css";
import { MdShoppingCart, MdAccountCircle } from "react-icons/md";

export const NavBar = () => {
  const {
    user,
    setIsLogged,
    cartObject: { cart },
  } = useUserContext();

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="row nav-section">
          <div className="col-12 col-md-3">
            <Link to="/home">
              <img className="navbar-brand" src="devf.png" alt="Devf" />
            </Link>
          </div>
          <div className="col-12 col-md-3">
            <Link to="/cart" className="nav-cart">
              <MdShoppingCart /> <span>{cart.length}</span>
            </Link>
          </div>
          {user.role === "ADMIN" && (
            <div class="col-12 col-md-3">
              <Link to="/add-product" className="nav-cart">
                Crear producto
              </Link>
            </div>
          )}
          <div class="col-12 col-md-3">
            <div class="nav-options">
              <Link to="/settings-account" className="nav-account dropdown">
                Mi Cuenta
                <span
                  className="nav-link nav-profile"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MdAccountCircle />
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-item" onClick={logout}>
                    Cerrar sesión
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
