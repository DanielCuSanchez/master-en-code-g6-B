import React from "react";
import { Nivel3 } from "./Nivel3";
import { PeterParker } from "./PeterParker";
import { ActivarTraje } from "./../HOC/ActivarTraje";

export const Nivel2 = () => {
  return (
    <div className="border border-4 border-danger">
      <h2>Soy el nivel 2</h2>

      {ActivarTraje(PeterParker)}

      <Nivel3 />
    </div>
  );
};
