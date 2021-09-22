import { createToken, validateToken } from "../lib/auth";
import { postUser, getOneUser } from "./user.controller";
import { validateEncryptedPassword } from "../middlewares/user.middlewares";

export const registro = async (req, res) => {
  const userCreated = await postUser(req.body);
  const token = await createToken(userCreated.id);
  res.status(201).json({ token });
};

export const login = async (req, res) => {
  //Primer paso verificar el token
  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];

  const tokenDecodificado = validateToken(token);

  if (!tokenDecodificado) {
    res.status(400).json({ msg: "token invalido" });
    return;
  }

  const { payload } = tokenDecodificado;

  //Segundo paso consultar si existe el correo electronico

  const userExist = await getOneUser(payload.id);

  if (req.body.email !== userExist.dataValues.email) {
    res.status(400).json({ msg: "email invalido" });
    return;
  }
  //Tercer paso comprobar contraseña

  const isPasswordCorrect = validateEncryptedPassword(
    req.body.password,
    userExist.dataValues.password
  );

  if (!isPasswordCorrect) {
    res.status(400).json({ msg: "password invalida" });
    return;
  }

  //Cuarto paso confirmar la autenticacion
  res.status(200).json({
    msg: "Login Success",
  });
};
