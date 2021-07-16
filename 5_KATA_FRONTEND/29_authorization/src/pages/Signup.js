import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Outside.css";
import { useUserContext } from "./../context/userContext";

export const Signup = () => {
  const context = useUserContext();
  if (context.isLogged) {
    return <Redirect to="/home" />;
  }

  const handlerSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <div className="container-section">
        <div class="top-section">
          <img className="logo" src="devf.png" alt="logo" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-4">
              <div className="login-form">
                <h3>Crear cuenta</h3>
                <form onSubmit={handlerSubmit}>
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Fecha de nacimiento</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Género</label>
                    <select type="select" className="form-select form-control">
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div class="d-grid ">
                    <button className="btn btn-app-primary btn-primary mt-3 ">
                      Registrarse
                    </button>
                    <Link
                      to="/login"
                      className="btn outline-app-primary  mt-3 "
                    >
                      Inicio
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
