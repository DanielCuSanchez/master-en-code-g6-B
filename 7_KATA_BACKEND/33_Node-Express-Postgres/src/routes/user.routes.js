import { Router } from 'express';

//Importing controllers
import {
	deleteOneUser,
	getOneUser,
	getUsers,
	postUser,
	updateOneUser,
} from '../controllers/user.controller';
import { verifyToken } from '../lib/auth';

const router = Router();

//console.log(router);

//  api/users
//router.post("/", postUser); //  api/users/
//router.get('/:idUser', getOneUser); //  api/users/
router.get('/', verifyToken, getUsers); //  api/users/
router.put('/:idUser', verifyToken, updateOneUser);
router.delete('/:idUser', verifyToken, deleteOneUser);

export default router;
