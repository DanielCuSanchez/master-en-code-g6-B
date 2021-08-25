import { Router } from "express";
//Importing controllers
import { getUsers } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);

export default router;
