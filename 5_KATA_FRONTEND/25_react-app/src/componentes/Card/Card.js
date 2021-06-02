import "./style.css";
import React, { useState } from "react";

export const Card = (props) => {
  //console.log("PROPS", props);
  const [color, setColor] = useState(true);

  const handlerColor = () => {
    setColor(!color);
  };
  return (
    <div className={`card ${color ? "blue-card" : "red-card"}`}>
      <div className="card-header">
        {props.name}
        <button onClick={handlerColor} className="btn btn-primary">
          C
        </button>
        <button
          onClick={() => {
            props.handlerRemove(props.id);
          }}
          className="btn btn-danger"
        >
          x
        </button>
      </div>
      <div className="card-body">
        <img className="card-img" src={props.image} alt="" />
      </div>
      <div className="card-footer">
        <p>{props.gender}</p>
      </div>
    </div>
  );
};
