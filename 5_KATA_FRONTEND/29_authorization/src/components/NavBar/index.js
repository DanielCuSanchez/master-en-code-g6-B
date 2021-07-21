import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import "./NavBar.css";
import { MdShoppingCart, MdAccountCircle } from "react-icons/md";

export const NavBar = () => {
  const { setIsLogged, cart } = useUserContext();

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
          <div className="col-12 col-md-6">
            <div className="nav-options">
              <Link to="/cart" className="nav-cart">
                <MdShoppingCart /> <span>{cart.length}</span>
              </Link>
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
