//Importacion de paquete
import jwt from "jsonwebtoken";
//Importacion modulo
import User from "../models/User";

import { postUser } from "./user.controller";

export const signup = async (req, res) => {
  console.log("😀", req.body);
  const userCreated = await postUser(req.body);
  console.log(userCreated);
  //Generar el token
  const token = await jwt.sign({ payload: "Soy el payload" }, "secreto", {
    expiresIn: "1d",
  });

  res.status(201).json({ token });
};

export const signin = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    msg: "Prueba signin",
  });
};
