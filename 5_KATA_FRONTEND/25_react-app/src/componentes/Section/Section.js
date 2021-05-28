import React from "react";
import "./style.css";
import { Card } from "../Card/Card";
import { listaDeEstudiantes } from "../../data/listaDeEstudiantes";

export const Section = () => {
  return (
    <div>
      <h2>Estudiantes destacados DEVF</h2>
      <div className="contenedor">
        {listaDeEstudiantes.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
