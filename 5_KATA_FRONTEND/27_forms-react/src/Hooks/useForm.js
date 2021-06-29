import { useState } from "react";

export const useForm = (valores = {}) => {
  const [form, setForm] = useState(valores);

  const handlerOnChange = (evento) => {
    const nuevoEstado = {
      ...form,
      [evento.target.name]:
        evento.target.name === "check" ? !form.check : evento.target.value,
    };

    setForm(nuevoEstado);

    // const saludo = "hola";
    // const objeto = {
    //   nombre: "Juan",
    //   edad: 22,
    //   [saludo]: "Hey",
    // };
  };

  return {
    form,
    handlerOnChange,
  };
};
