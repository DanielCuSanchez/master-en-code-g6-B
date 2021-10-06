import { Router } from "express";
//Importing controllers
import {
  deleteOneActor,
  getOneActor,
  getActor,
  postActor,
  updateOneActor,
} from "../controllers/actor.controller";

const router = Router();

//  api/actor
router.post("/", postActor); //  api/actor/
router.get("/:idActor", getOneActor); //  api/actor/
router.get("/", getActor); //  api/actor/
router.put("/:idActor", updateOneActor);
router.delete("/:idActor", deleteOneActor);

export default router;
