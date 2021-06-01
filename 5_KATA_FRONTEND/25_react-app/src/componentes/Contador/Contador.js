import React, { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0); // state = stateNuevo
  const [texto, setTexto] = useState("Hola soy el contador:"); // state = stateNuevo
  // [ 0, 1 ]
  // const algo = useState(initialState);
  // console.log(algo);
  // algo[0];
  // algo[1];

  const handlerDecrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handlerIncrement = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      {console.log(contador)}
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
