import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

//import { useUser } from "../hooks/useUser";
import { login } from "../services/auth.service";

import { useUserContext } from "./../context/userContext";

export const Login = () => {
  //const [isLogged, setIsLogged, user] = useUser();

  const context = useUserContext();
  const { setIsLogged, isLogged } = context;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const formHandler = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    login(form).then((resp) => {
      setIsLoading(false);
      //setIsLogged(true);
      if (resp) {
        if (resp.token) {
          setIsLogged(true);
        }
        return;
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    });
  };

  const onChangeInput = (ev) => {
    const newForm = { ...form };
    newForm[ev.target.name] = ev.target.value;
    setForm({ ...form, ...newForm });
  };

  // if (isLogged) {
  //   console.log(isLogged);
  //   return <Redirect to="/home" />;
  // }

  if (isLogged) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container-section">
      <div className="top-section">
        <img className="logo" src="devf.png" alt="logo" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-4">
            <div className="login-form">
              <h3>¡Hola! Para continuar, ingresa tu e-mail registrado</h3>
              <form>
                {error && (
                  <div className="error">Verifica tus credenciales</div>
                )}
                <div className="form-group mt-5">
                  <input
                    name="email"
                    onChange={onChangeInput}
                    value={form.email}
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    name="password"
                    onChange={onChangeInput}
                    value={form.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-options">
                  <button
                    type="submit"
                    disabled={isLoading}
                    onClick={formHandler}
                    className="btn btn-primary  btn-block btn-app-primary"
                  >
                    {isLoading ? "Espera..." : "Entrar"}
                  </button>
                  <Link
                    to="/signup"
                    className="btn  btn-block  outline-app-primary mt-2"
                  >
                    Registrarse
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
