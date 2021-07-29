import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useUserContext } from "./../context/userContext";
import { signUp } from "../services/auth.service";

export const Signup = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email: "",
    password: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);

  const context = useUserContext();
  if (context.isLogged) {
    return <Redirect to="/home" />;
  }

  if (isRegistered) {
    return <Redirect to="/login" />;
  }
  const onChangeInput = (ev) => {
    const newForm = { ...form };
    newForm[ev.target.name] = ev.target.value;
    setForm({ ...form, ...newForm });
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();

    const dataToSend = {
      first_name: form.first_name,
      last_name: form.last_name,
      birth_date: form.birth_date,
      gender: form.gender,
      email: form.email,
      password: form.password,
      role: form.role,
    };

    setIsLoading(true);
    signUp(dataToSend).then((resp) => {
      setIsLoading(false);
      if (!resp) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
      setIsRegistered(true);
    });
  };

  return (
    <>
      <div className="container-section">
        <div className="top-section">
          <img className="logo" src="devf.png" alt="logo" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-4">
              <div className="login-form">
                <h3>Crear cuenta</h3>
                <form onSubmit={handlerSubmit}>
                  {error && <div className="error">Verifica los datos</div>}
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={form.first_name}
                      name="first_name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Apellido</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      onChange={onChangeInput}
                      value={form.last_name}
                      name="last_name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={onChangeInput}
                      value={form.email}
                      name="email"
                    />
                  </div>
                  <div required className="form-group">
                    <label>Fecha de nacimiento</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={onChangeInput}
                      value={form.birth_date}
                      name="birth_date"
                    />
                  </div>
                  <div className="form-group">
                    <label>Género</label>
                    <select
                      required
                      onChange={onChangeInput}
                      name="gender"
                      type="select"
                      className="form-select form-control"
                    >
                      <option>Selecciona</option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Role de APP</label>
                    <select
                      required
                      onChange={onChangeInput}
                      name="role"
                      type="select"
                      className="form-select form-control"
                    >
                      <option>Selecciona</option>
                      <option value="ADMIN">Administrador</option>
                      <option value="CUSTOMER">Cliente</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      required
                      className="form-control"
                      onChange={onChangeInput}
                      value={form.password}
                      name="password"
                    />
                  </div>
                  <div className="d-grid ">
                    <button
                      className="btn btn-app-primary btn-primary mt-4 "
                      disabled={isLoading}
                    >
                      {isLoading ? "Espere" : "Registrarse"}
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
