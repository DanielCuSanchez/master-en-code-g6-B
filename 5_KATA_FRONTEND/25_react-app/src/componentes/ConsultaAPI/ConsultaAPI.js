import React, { Fragment , useEffect, useState } from "react";
import { Card } from "./../Card/Card";

export const ConsultaAPI = () => {
  const URL = "https://rickandmortyapi.com/api/character";
  const [personajes, setPersonajes] = useState([]);
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((informacion) => {
        const data = informacion.json();
        return data;
      })
      .then((data) => {
        setPersonajes(data.results);
        setPersonajesFiltrados(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlerRemove = (id) => {
    const nuevosPersonajes = personajes.filter(
      (personaje) => personaje.id !== id
    );
    setPersonajes(nuevosPersonajes);
  };

  const filterRick = () => {
    setPersonajesFiltrados(
      personajes.filter((personaje) => personaje.name.includes("Rick"))
    );
  };

  const filterMortys = () => {
    setPersonajesFiltrados(
      personajes.filter((personaje) => personaje.name.includes("Morty"))
    );
  };

  const handlerTodos = () => {
    setPersonajesFiltrados(personajes);
  };

  const titleStyles = personajes.length > 0  ? {marginTop: '32px', color: 'red'} : {}

  return (
    <div>
      {console.log(personajes)}
      <h2 style={titleStyles} >Consulta a la API de rick and morty </h2>
      <div className="container">
        {personajes.length === 0 ? (
          <div className="row justify-content-center">
            <div className="col">
              <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div
                  class="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <Fragment>
            <button className="btn btn-primary" onClick={handlerTodos}>
              Todos
            </button>
            <button className="btn btn-primary" onClick={filterRick}>
              Solo Ricks
            </button>
            <button className="btn btn-primary" onClick={filterMortys}>
              Solo Mortys
            </button>
            <div className="row">
              {personajesFiltrados.map((personaje) => (
                <div key={personaje.id} className="col-md-3 my-2">
                  <Card {...personaje} handlerRemove={handlerRemove} />
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
