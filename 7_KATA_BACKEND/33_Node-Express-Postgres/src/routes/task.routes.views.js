import { Router } from "express";
import { Task } from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const allTasks = await Task.findAll({
    attributes: ["id"],
  });

  res.render("pages/tasks", {
    data: allTasks,
  });
});

export default router;
