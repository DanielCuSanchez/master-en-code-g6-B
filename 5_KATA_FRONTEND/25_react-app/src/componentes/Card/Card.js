import "./style.css";
import React from "react";

export const Card = (props) => {
  console.log("PROPS", props);

  return (
    <div className="card">
      <div className="card-header">
        {props.nombre}
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
