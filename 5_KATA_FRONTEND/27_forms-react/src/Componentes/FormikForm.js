import React from "react";
import { Formik, Form, Field } from "formik";
import { preguntas } from "./preguntas.json";

export const FormikForm = () => {
  const creaEstadoIncial = () => {
    let estadoInicial = {};
    Object.keys(preguntas).forEach((key) => {
      estadoInicial = {
        ...estadoInicial,
        [preguntas[key].name]: "",
      };
    });
    return estadoInicial;
  };

  const funcionQueValida = (values) => {
    console.log(values);
  };

  return (
    <div className="container border border-secondary mt-4 p-4">
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <h1>Formik</h1>

          <Formik
            initialValues={creaEstadoIncial()}
            onSubmit={funcionQueValida}
          >
            <Form>
              {preguntas.map((pregunta) => {
                return (
                  <div key={pregunta.id}>
                    <label className="form-label" htmlFor={pregunta.name}>
                      {pregunta.titulo}
                    </label>
                    <Field
                      className="form-control form-control-lg"
                      as="select"
                      id={pregunta.id}
                      name={pregunta.name}
                    >
                      {pregunta.opciones.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </Field>
                  </div>
                );
              })}

              <button className="btn btn-dark btn-lg mt-4" type="submit">
                Enviar formik
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
