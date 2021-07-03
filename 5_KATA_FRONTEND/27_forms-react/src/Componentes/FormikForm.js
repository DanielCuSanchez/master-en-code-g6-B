import React from "react";
import { Formik, Form, Field } from "formik";
import { preguntas } from "./preguntas.json";

export const FormikForm = () => {
  console.log(preguntas);
  const estadoInicial = { pregunta1: "", pregunta2: "" };

  const funcionQueValida = (values) => {
    console.log(values);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Sign Up</h1>
        <Formik initialValues={estadoInicial} onSubmit={funcionQueValida}>
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
