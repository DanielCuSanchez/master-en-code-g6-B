import React, { Fragment, useEffect, useState } from "react";
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
        const personajesListosconLaKey = colocarKey(data.results);
        setPersonajes(personajesListosconLaKey);
        setPersonajesFiltrados(personajesListosconLaKey);
      })
      .catch((err) => console.log(err));
  }, []);

  const colocarKey = (arregloPersonajes) => {
    const personajesConLaKey = arregloPersonajes.map((personaje) => {
      const colorCarta = false;
      return {
        ...personaje,
        colorCarta,
      };
    });
    return personajesConLaKey;
  };

  const cambiarColorCarta = (id) => {
    //Cambiar color carta
    const nuevosPersonajes = personajes.map((personaje) =>
      personaje.id === id
        ? { ...personaje, colorCarta: !personaje.colorCarta }
        : { ...personaje }
    );
    setPersonajes(nuevosPersonajes);
    setPersonajesFiltrados(nuevosPersonajes);
  };

  const handlerRemove = (id) => {
    const nuevosPersonajes = personajesFiltrados.filter(
      (personaje) => personaje.id !== id
    );
    setPersonajesFiltrados(nuevosPersonajes);
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

  return (
    <div>
      {/* {console.log(personajes)}
      {console.log(personajesFiltrados)} */}
      <div className="container">
        {personajes.length === 0 ? (
          <div className="row justify-content-center">
            <div className="col">
              <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div
                  className="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <>
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
                  <Card
                    {...personaje}
                    handlerRemove={handlerRemove}
                    cambiarColorCarta={cambiarColorCarta}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
