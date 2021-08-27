import { Router } from "express";
//Importing controllers
import {
  deleteOneTask,
  getOneTask,
  getTasks,
  getTasksByUserId,
  postTask,
  updateOneTask,
} from "../controllers/task.controller";

const router = Router();


//  api/tasks
router.post("/", postTask); //  api/tasks/
router.get("/:idTask", getOneTask); //  api/tasks/
router.get("/", getTasks); //  api/tasks/
router.put("/:idTask", updateOneTask);
router.delete("/:idTask", deleteOneTask);

export default router;
