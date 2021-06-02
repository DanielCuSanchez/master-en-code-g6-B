import "./style.css";
import React, { useState } from "react";

export const CardSection = (props) => {
  //console.log("PROPS", props);
  const [color, setColor] = useState("blue-card");

  const handlerColor = () => {
    setColor("red-card");
  };
  return (
    <div className={`card ${color}`}>
      <div className="card-header">
        {props.nombre}
        <button onClick={handlerColor} className="btn btn-primary">
          C
        </button>
        <button
          onClick={() => {
            props.handlerRemove(props.nombre);
          }}
          className="btn btn-danger"
        >
          x
        </button>
      </div>
      <div className="card-body">
        <img className="card-img" src={props.img} alt="" />
      </div>
      <div className="card-footer">
        <p>{props.edad}</p>
      </div>
    </div>
  );
};
