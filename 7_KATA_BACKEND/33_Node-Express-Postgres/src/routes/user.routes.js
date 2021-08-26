import { Router } from "express";
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
router.post("/", postUser); //  api/users/
router.get("/:idUser", getOneUser); //  api/users/
router.get("/", getUsers); //  api/users/
router.put("/:idUser", updateOneUser);
router.delete("/:idUser", deleteOneUser);

export default router;
