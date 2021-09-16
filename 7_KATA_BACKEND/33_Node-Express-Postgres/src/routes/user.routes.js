import { Router } from "express";
//Importing middlewares

import {
  validatePostUser,
  encryptPasswordUser,
} from "../middlewares/user.middlewares";

//Importing controllers
import {
  deleteOneUser,
  getOneUser,
  getUsers,
  postUser,
  updateOneUser,
} from "../controllers/user.controller";

const router = Router();

//console.log(router);

//  api/users
router.post("/", validatePostUser, encryptPasswordUser, postUser); //  api/users/
router.get("/:idUser", getOneUser); //  api/users/
router.get("/", getUsers); //  api/users/
router.put("/:idUser", updateOneUser);
router.delete("/:idUser", deleteOneUser);

export default router;
