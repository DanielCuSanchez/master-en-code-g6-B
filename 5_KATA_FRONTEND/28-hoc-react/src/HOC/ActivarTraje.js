import React from "react";

export const ActivarTraje = (Personaje) => {
  return (
    <div className="jumbotron bg-dark text-light">
      <h2>Estoy con traje de superhero</h2>
      <Personaje />
    </div>
  );
};
