import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import defaultImg from "./super.png";

export const Card = (props) => {
  const {
    name: nombre,
    id,
    handlerRemove,
    image,
    gender,
    colorCarta,
    cambiarColorCarta,
  } = props;

  // console.log("PROPS", props);
  // const [color, setColor] = useState(false);

  // const handlerColor = () => {
  //   setColor(!color);
  // };

  return (
    <div className={`card ${colorCarta ? "red-card" : "blue-card"}`}>
      {/* {console.log("SOY la carta", nombre, "RENDER")} */}
      <div className="card-header">
        {nombre}
        <button
          onClick={() => cambiarColorCarta(id)}
          className="btn btn-primary"
        >
          Cambiar
        </button>
        <button
          onClick={() => {
            handlerRemove(id);
          }}
          className="btn btn-danger"
        >
          x
        </button>
      </div>
      <div className="card-body">
        <img className="card-img" src={image} alt="" />
      </div>
      <div className="card-footer">
        <p>{gender}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handlerRemove: PropTypes.func,
  image: PropTypes.string,
  gender: PropTypes.string,
};

Card.defaultProps = {
  name: "Personaje",
  handlerRemove: () => {},
  image: defaultImg,
  gender: "NA",
};
