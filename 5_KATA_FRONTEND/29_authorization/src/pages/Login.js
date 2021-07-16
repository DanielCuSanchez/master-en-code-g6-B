import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { login } from "../services/auth.service";
import "./Outside.css";
import { useUserContext } from "./../context/userContext";

export const Login = () => {
  //const [isLogged, setIsLogged, user] = useUser();
  const context = useUserContext();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const formHandler = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    login(form).then((resp) => {
      setIsLoading(false);
      //setIsLogged(true);
      if (resp) {
        if (resp.token) {
          context.setIsLogged(true);
        }
      }
      console.log(resp);
    });
  };

  const onChangeInput = (ev) => {
    const newForm = { ...form };
    newForm[ev.target.name] = ev.target.value;
    setForm({ ...form, ...newForm });
    console.log(form);
  };

  // if (isLogged) {
  //   console.log(isLogged);
  //   return <Redirect to="/home" />;
  // }

  if (context.isLogged) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>
            Inicia sesión en <br /> Mi tienda
          </h2>
        </div>
        <Link to="/signup" className="btn btn-secondary">
          Registrarse
        </Link>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  onChange={onChangeInput}
                  value={form.email}
                  type="email"
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  onChange={onChangeInput}
                  value={form.password}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                onClick={formHandler}
                className="btn btn-black"
              >
                {isLoading ? "Espera..." : "Entrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
