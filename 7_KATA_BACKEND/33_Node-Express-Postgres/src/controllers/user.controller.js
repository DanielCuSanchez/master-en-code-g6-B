//Importing Models
import { User } from '../models/User';

export async function getUsers(req, res) {
	const allUsers = await User.findAll();

	res.status(200).json({
		response: 'all users',
		data: allUsers,
	});
}

export async function getOneUser(idUser) {
	try {
		const oneUser = await User.findOne({
			where: {
				id: idUser,
			},
		});

		if (oneUser === null) {
			return;
		}
		return oneUser;
	} catch (error) {
		return error;
	}
}

export async function getOneUserByEmail(email) {
	try {
		const oneUser = await User.findOne({
			where: {
				email: email,
			},
		});

		if (oneUser === null) {
			return;
		}
		return oneUser;
	} catch (error) {
		return error;
	}
}

export async function postUser(body) {
	const { name, lastname, email, password } = body;
	//console.log(name, lastname, email, password, "😀");

	try {
		const newUser = await User.create(
			{
				name,
				lastname,
				email,
				password,
			},
			{
				fields: ['name', 'lastname', 'email', 'password'],
			}
		);
		return newUser;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function updateOneUser(req, res) {
	const { idUser } = req.params;
	const { name, lastname, email, password } = req.body;

	const userToUpdate = await User.findOne({
		where: {
			id: idUser,
		},
	});
	await userToUpdate.update({
		name,
		lastname,
		email,
		password,
	});
	res.status(200).json({
		response: 'user updated',
	});
}

export async function deleteOneUser(req, res) {
	const { idUser } = req.params;
	try {
		const countRow = await User.destroy({
			where: {
				id: idUser,
			},
		});

		if (countRow === 0) {
			res.status(404).json({
				response: 'Not found',
			});
		} else {
			res.status(200).json({
				response: 'User deleted',
				count: countRow,
			});
		}
	} catch (error) {
		res.status(500).json({
			response: 'Error',
		});
	}
}
