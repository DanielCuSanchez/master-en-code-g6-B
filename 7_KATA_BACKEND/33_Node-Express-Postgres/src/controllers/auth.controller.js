import { createToken, validateToken } from '../lib/auth';
import { postUser, getOneUser, getOneUserByEmail } from './user.controller';
import { validateEncryptedPassword } from '../middlewares/user.middlewares';

export const registro = async (req, res) => {
	const userCreated = await postUser(req.body);
	const token = await createToken(userCreated.id);
	res.status(201).json({ token });
};

export const login = async (req, res) => {
	//primer paso consultar si existe el correo electronico
	const userExist = await getOneUserByEmail(req.body.email);
	if (req.body.email !== userExist.dataValues.email) {
		res.status(400).json({ msg: 'email invalido' });
		return;
	}
	//segundo paso comprobar contraseña
	const isPasswordCorrect = validateEncryptedPassword(
		req.body.password,
		userExist.dataValues.password
	);

	if (!isPasswordCorrect) {
		res.status(400).json({ msg: 'password invalida' });
		return;
	}
	//Tercero generar token
	const token = await createToken(userExist.id);

	//Cuarto paso confirmar la autenticacion
	res.status(200).json({
		msg: 'Login Success',
		token,
	});
};
