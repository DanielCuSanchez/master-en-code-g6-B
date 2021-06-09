import React from "react";
import { Link } from "react-router-dom";
import vision from "../components/vision.png";

export const Project = ({ imgUrl = vision, id, title, description }) => {
  return (
    <Link className="card" style={{ width: "18rem" }} to={"/project/" + id}>
      <img src={imgUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </Link>
  );
};
