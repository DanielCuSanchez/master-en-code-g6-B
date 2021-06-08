import React from "react";
import { CardContainer } from "../componentes/CardContainer/CardContainer";
export const Inicio = ({ children }) => {
  const titleStyles = { marginTop: "32px", color: "red" };
  return (
    <>
      <CardContainer>
        <h2 style={titleStyles}>Consulta a la API de rick and morty </h2>
      </CardContainer>

      {children}

      <CardContainer>
        <h2 style={titleStyles}>Soy el footer</h2>
      </CardContainer>
    </>
  );
};
