//Importacion de paquete
import jwt from "jsonwebtoken";

export const createToken = async (id) => {
  //Generar el token
  const token = await jwt.sign({ payload: { id } }, "secreto", {
    expiresIn: "1d",
  });

  return token;
};
export const validateToken = (token) => {
  return jwt.verify(token, "secreto", function (error, decodedToken) {
    if (error) {
      return false;
    } else {
      return decodedToken;
    }
  });
};
