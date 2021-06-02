import React, { useEffect, useState } from "react";

export const Efecto = () => {
  const [numero, setNumero] = useState(0);
  const [numero1, setNumero1] = useState(0);
  useEffect(() => {
    console.log("Soy el useEffect que se ejecuta 1 VEZ");
  }, []);

  useEffect(() => {
    console.log("Soy el useEffect que se ejecuta CADA VEZ DEL RENDERIZADO");
  });

  useEffect(() => {
    console.log("Soy el useEffect que se ejecuta CADA VEZ QUE NUMERO_1 CAMBIE");
  }, [numero1]);

  useEffect(() => {
    console.log(
      "Soy el useEffect que se ejecuta CADA VEZ QUE AMBAS DEPENDENCIAS CAMBIAN"
    );
  }, [numero1, numero]);

  return (
    <div>
      <h2>Use Effect</h2>
      <p>
        Numero:
        <span>{numero}</span>
      </p>

      <p>
        Numero_1:
        <span>{numero1}</span>
      </p>
      <button onClick={() => setNumero(numero + 1)}> click aqui normal </button>
      <button onClick={() => setNumero1(numero1 + 1)}>Modifica numero1</button>
    </div>
  );
};
