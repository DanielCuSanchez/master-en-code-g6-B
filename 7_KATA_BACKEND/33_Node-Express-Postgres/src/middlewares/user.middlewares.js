import Joi from "joi";

const schemaUser = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(2).max(30).alphanum().required(),
});

export const validatePostUser = async (req, res, next) => {
  try {
    const respuesta = await schemaUser.validateAsync(req.body);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
  res.status(400).json({ msg: "test" });
  return;
  //next();
};
