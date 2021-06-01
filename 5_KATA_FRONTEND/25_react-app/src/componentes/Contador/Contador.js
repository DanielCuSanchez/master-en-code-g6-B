import React, { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0); // state = stateNuevo
  const [texto, setTexto] = useState("Hola soy el contador: "); // state = stateNuevo
  // [ 0, 1 ]
  // const algo = useState(initialState);
  // console.log(algo);
  // algo[0];
  // algo[1];

  const handlerDecrement = () => {
    // console.log("SOY EL DECREMENT");
    // console.log("ESTADO CONTADOR DECREMENT", contador);
    if (contador > 0) {
      setContador(contador - 1);
      setTexto("adios ");
      if (contador === 1) {
        setTexto("Hola soy el contador: ");
      }
    }
  };

  const handlerIncrement = () => {
    // console.log("SOY EL INCREMENT");
    // console.log("ESTADO CONTADOR ICREMENT", contador);
    setContador(contador + 1);
    setTexto("holi ");
  };

  return (
    <div>
      {/* {console.log("SOY EL RENDER")}
      {console.log("ESTADO CONTADOR RENDER", contador)} */}
      <div className="row">
        <p>
          {texto}
          <span>{contador}</span>
        </p>
      </div>
      <button
        onClick={handlerIncrement}
        type="button"
        className="btn btn-primary"
      >
        Incrementar
      </button>
      <button
        onClick={handlerDecrement}
        type="button"
        className="btn btn-secondary"
      >
        Decrementar
      </button>
    </div>
  );
};
