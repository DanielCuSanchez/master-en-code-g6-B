import React, { useState } from "react";
import "./style.css";
import { Card } from "../Card/Card";
import { listaDeEstudiantes } from "../../data/listaDeEstudiantes";

export const Section = () => {
  const [listaAlumnos, setListaAlumnos] = useState(listaDeEstudiantes); //[]

  const handlerRemove = (eseValorDesdeCard) => {
    console.log(eseValorDesdeCard);
    alert("Eliminar carta");
  };

  return (
    <div>
      <h2>Estudiantes destacados DEVF</h2>
      <div className="contenedor">
        {listaAlumnos.map((card, index) => (
          <Card key={index} {...card} handlerRemove={handlerRemove} />
        ))}
      </div>
    </div>
  );
};
