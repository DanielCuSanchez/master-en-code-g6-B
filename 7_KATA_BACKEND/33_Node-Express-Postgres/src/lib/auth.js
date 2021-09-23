//Importacion de paquete
import jwt from 'jsonwebtoken';
import config from '../config';

//Funcion normal
export const createToken = async (id) => {
	//Generar el token
	const token = await jwt.sign({ payload: { id } }, config.SECRET_JWT, {
		expiresIn: '1d',
	});
	return token;
};
//Funcion normal
export const validateToken = (token) => {
	return jwt.verify(token, config.SECRET_JWT, function (error, decodedToken) {
		if (error) {
			return false;
		} else {
			return decodedToken;
		}
	});
};
//Funcion middleware
export const verifyToken = (req, res, next) => {
	//Primer paso verificar el token
	const { authorization = undefined } = req.headers;
	//Revisamos si esta presente en headers el token
	if (!authorization) {
		res.status(400).json({ msg: 'necesitas un token' });
		return;
	}
	//Si esta presente extraemos el token
	const token = authorization.split(' ')[1];
	//Revisamos que sea un token valido
	const tokenDecodificado = validateToken(token);

	if (!tokenDecodificado) {
		res.status(400).json({ msg: 'token invalido o caducado' });
		return;
	}
	//Extraemos el ID del token para que lo utilicemos en las consultas
	const { payload } = tokenDecodificado;

	//Logica en caso de que tengan su app con roles
	// if (payload.role !== 'ADMIN') {
	// 	res.status(400).json({ msg: 'No eres ADMIN' });
	// 	return;
	// }

	req.body.id = payload.id;
	//Invoca al siguiente middleware
	next();
};
