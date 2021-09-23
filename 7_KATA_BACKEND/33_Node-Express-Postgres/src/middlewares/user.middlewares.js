import Joi from 'joi';
import bcrypt from 'bcrypt';

const schemaUser = Joi.object({
  name: Joi.string().min(2).required(),
  lastname: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).alphanum().required(),
});

export const validatePostUser = async (req, res, next) => {
  try {
    await schemaUser.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    //arreglo temporal
    let errores = [];
    //recorrer el arreglo de errores y por cada objeto solo obtener el mensaje
    error.details.forEach((error) => {
      errores.push(error.message);
    });

    res.status(400).json({ message: errores });
  }
  return;
};

export const encryptPasswordUser = (req, res, next) => {
  const passwordToEncrypt = req.body.password;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const encryptedPassword = bcrypt.hashSync(passwordToEncrypt, salt);

  req.body.password = encryptedPassword;
  //res.status(200).json({ msg: encryptedPassword });

  next();
};

export const validateEncryptedPassword = (
  normalPassword,
  passwordEscrypted
) => {
  return bcrypt.compareSync(normalPassword, passwordEscrypted);
};
