import "./style.css";
import React from "react";

export const Card = ({ nombre }) => {
  return (
    <div className="card">
      <div className="card-header">Soy el header</div>
      <div className="card-body">
        <img
          className="card-img"
          src="https://source.unsplash.com/random"
          alt=""
        />
      </div>
      <div className="card-footer">Soy el footer</div>
    </div>
  );
};
