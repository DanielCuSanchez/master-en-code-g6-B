import React, { useState } from "react";
import "./style.css";
import { CardSection } from "../CardSection/CardSection";
import { listaDeEstudiantes } from "../../data/listaDeEstudiantes";

export const Section = () => {
  const [listaAlumnos, setListaAlumnos] = useState(listaDeEstudiantes); //[]

  const handlerRemove = (eseValorDesdeCard) => {
    console.log(eseValorDesdeCard);

    const nuevaLista = listaAlumnos.filter(
      (alumno) => alumno.nombre !== eseValorDesdeCard
    );

    setListaAlumnos(nuevaLista);

    alert("Eliminaste carta");
  };

  return (
    <div>
      <h2>Estudiantes destacados DEVF</h2>
      <div className="contenedor">
        {listaAlumnos.map((card, index) => (
          <CardSection key={index} {...card} handlerRemove={handlerRemove} />
        ))}
      </div>
    </div>
  );
};
