import { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    check: false,
  });

  const handlerOnChange = (evento) => {
    const nuevoEstado = {
      ...form,
      [evento.target.name]:
        evento.target.name === "check" ? !form.check : evento.target.value,
    };

    setForm(nuevoEstado);

    // const objeto = {
    //   nombre: "Juan",
    //   edad:22
    // };
  };

  return {
    form,
    handlerOnChange,
  };
};
