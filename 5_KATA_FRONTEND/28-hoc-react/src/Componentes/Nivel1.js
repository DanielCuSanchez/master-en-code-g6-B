import React from "react";
import { Nivel2 } from "./Nivel2";
import { ActivarTraje } from "./../HOC/ActivarTraje";
import { BruceWayne } from "./BruceWayne";

export const Nivel1 = () => {
  return (
    <div className="border border-4 border-primary">
      <h2>Soy el nivel 1</h2>

      {ActivarTraje(BruceWayne)}
      <Nivel2 />
    </div>
  );
};
