import React, { useEffect, useState } from "react";
import { Card } from "./../Card/Card";

export const ConsultaAPI = () => {
  const URL = "https://rickandmortyapi.com/api/character";
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((informacion) => {
        const data = informacion.json();
        return data;
      })
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {console.log(personajes)}
      <h2>Consulta a la API de rick and morty </h2>
      <div className="container">
        <div className="row">
          {personajes.map((personaje) => (
            <div key={personaje.id} className="col-md-3">
              <Card {...personaje} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
