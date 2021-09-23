import { Router } from 'express';
import { registro, login } from '../controllers/auth.controller';

//Importing middlewares
import {
	validatePostUser,
	encryptPasswordUser,
} from '../middlewares/user.middlewares';

const router = Router();

router.post('/registro', validatePostUser, encryptPasswordUser, registro);

router.post('/login', login);

export default router;
