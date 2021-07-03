import React from "react";
import { useForm } from "./../Hooks/useForm";

export const Form = () => {
  const { form, handlerOnChange } = useForm({
    email: "",
    password: "",
    check: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="container mt-4 p-4 border border-primary">
      {console.log("ME RENDERIZO")}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Form manual</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={handlerOnChange}
                placeholder="Ingresa tu email"
                name="email"
                value={form.email}
              />
              <div id="emailHelp" className="form-text">
                Tu esta información segura
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handlerOnChange}
                className="form-control"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handlerOnChange}
                checked={form.check}
                name="check"
              />
              <label className="form-check-label">Acepto términos</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Loggearme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
