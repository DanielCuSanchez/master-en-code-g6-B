//Importing Models
import { Task } from "../models/Task";

export async function getTasks(req, res) {
  const { idUser } = req.query
  let allTasks;
  if(idUser){
    allTasks = await Task.findAll({
      where: { userid: idUser }
    });
  }else{
    allTasks = await Task.findAll({
      attributes: ["id", "name", "description", "done", "deliverydate", "userid"],
    });
  }

  res.status(200).json({
    response: "all tasks",
    data: allTasks,
  });
}

export async function getOneTask(req, res) {
  const { idTask } = req.params;

  try {
    const oneTask = await Task.findOne({
      where: {
        id: idTask,
      },
    });

    if (oneTask === null) {
      res.status(404).json({
        response: "not found",
      });
      return;
    }

    res.status(200).json({
      response: "This is the task",
      data: oneTask,
    });
  } catch (error) {
    res.status(500).json({
      response: "Internal error server",
    });
  }
}

export async function postTask(req, res) {
  const { name, description, done, deliverydate, userid } = req.body;
  try {
    const newTask = await Task.create(
      {
        name, description, done, deliverydate, userid
      },
      {
        fields: ["name", "description", "done", "deliverydate", "userid"],
      }
    );
    res.status(200)
      .json({ response: "post succesfully", taskCreated: newTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: "Internal server error" });
  }
}

export async function updateOneTask(req, res) {
  const { idTask } = req.params;
  const { name, description, done, deliverydate, userid } = req.body;

  const taskToUpdate = await Task.findOne({
    where: {
      id: idTask,
    },
  });
  await taskToUpdate.update({ name, description, done, deliverydate, userid });
  res.status(200).json({
    response: "task updated",
  });
}

export async function deleteOneTask(req, res) {
  const { idTask } = req.params;
  try {
    const countRow = await Task.destroy({
      where: {
        id: idTask,
      },
    });

    if (countRow === 0) {
      res.status(404).json({
        response: "Not found",
      });
    } else {
      res.status(200).json({
        response: "Task deleted",
        count: countRow,
      });
    }
  } catch (error) {
    res.status(500).json({
      response: "Error",
    });
  }
}
