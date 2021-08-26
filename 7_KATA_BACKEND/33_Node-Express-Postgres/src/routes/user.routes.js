import { Router } from "express";
//Importing controllers
import { getUsers, postUser } from "../controllers/user.controller";

const router = Router();

//console.log(router);

//  api/users
router.post("/", postUser); //  api/users/

router.get("/", getUsers); //  api/users/

export default router;
