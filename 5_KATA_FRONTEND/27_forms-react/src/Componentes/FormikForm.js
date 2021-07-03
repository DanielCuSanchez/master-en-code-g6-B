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
    <div className="row justify-content-center text-center">
      <div className="col-md-8">
        <h1>Sign Up</h1>

        <Formik initialValues={creaEstadoIncial()} onSubmit={funcionQueValida}>
          <Form>
            {preguntas.map((pregunta) => {
              return (
                <div key={pregunta.id}>
                  <label htmlFor="firstName">{pregunta.titulo}</label>
                  <Field
                    id={pregunta.id}
                    name={pregunta.name}
                    placeholder={pregunta.titulo}
                  />
                </div>
              );
            })}

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
