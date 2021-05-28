import "./style.css";
import React from "react";

export const Card = (props) => {
  console.log("PROPS", props);
  return (
    <div className="card">
      <div className="card-header">{props.nombre}</div>
      <div className="card-body">
        <img className="card-img" src={props.img} alt="" />
      </div>
      <div className="card-footer">{props.edad}</div>
    </div>
  );
};
