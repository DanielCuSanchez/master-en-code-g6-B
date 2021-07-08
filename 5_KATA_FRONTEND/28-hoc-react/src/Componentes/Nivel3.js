import React from "react";
import { ActivarTraje } from "./../HOC/ActivarTraje";
import { PeterParker } from "./PeterParker";

export const Nivel3 = () => {
  return (
    <div className="border border-4 border-warning">
      <h2>Soy el nivel 3</h2>
      {ActivarTraje(PeterParker)}
    </div>
  );
};
