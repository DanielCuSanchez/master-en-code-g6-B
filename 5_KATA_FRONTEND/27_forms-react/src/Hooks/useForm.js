import { useState } from "react"; 

export const useForm = (valores = {}) => {
  const [form, setForm] = useState(valores);

  const handlerOnChange = (evento) => {
    const nuevoEstado = {
      ...form,
      [evento.target.name]:
        evento.target.type === "checkbox"
          ? evento.target.checked
          : evento.target.value,
    };
    setForm(nuevoEstado);
  };

  return {
    form,
    handlerOnChange,
  };
};
