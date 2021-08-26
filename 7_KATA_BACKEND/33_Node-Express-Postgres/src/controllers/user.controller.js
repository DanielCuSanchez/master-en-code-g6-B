//Importing Models
import { User } from "../models/User";

export async function getUsers(req, res) {
  const allUsers = await User.findAll({
    attributes: ["id", "name", "lastname"],
  });

  res.status(200).json({
    response: "all users",
    data: allUsers,
  });
}

export async function getOneUser(req, res) {
  const { idUser } = req.params;

  try {
    const oneUser = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (oneUser === null) {
      res.status(404).json({
        response: "not found",
      });
      return;
    }

    res.status(200).json({
      response: "This is the user",
      data: oneUser,
    });
  } catch (error) {
    res.status(500).json({
      response: "Internal error server",
    });
  }
}

export async function postUser(req, res) {
  const { name, lastname, email, password } = req.body;
  //console.log(name, lastname, email, password, "😀");

  try {
    const newUser = await User.create(
      {
        name,
        lastname,
        email,
        password,
      },
      {
        fields: ["name", "lastname", "email", "password"],
      }
    );
    res
      .status(200)
      .json({ response: "post succesfully", userCreated: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: "Internal error server" });
  }
}

export async function updateOneUser(req, res) {
  const { idUser } = req.params;
  const { name, lastname, email, password } = req.body;

  const userToUpdate = await User.findOne({
    where: {
      id: idUser,
    },
  });
  await userToUpdate.update({
    name,
    lastname,
    email,
    password,
  });
  res.status(200).json({
    response: "user updated",
  });
}

export async function deleteOneUser(req, res) {
  const { idUser } = req.params;
  try {
    const countRow = await User.destroy({
      where: {
        id: idUser,
      },
    });

    if (countRow === 0) {
      res.status(404).json({
        response: "Not found",
      });
    } else {
      res.status(200).json({
        response: "User deleted",
        count: countRow,
      });
    }
  } catch (error) {
    res.status(500).json({
      response: "Error",
    });
  }
}
