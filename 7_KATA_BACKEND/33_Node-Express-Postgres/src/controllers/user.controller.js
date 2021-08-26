//Importing Models
import { User } from "../models/User";

export async function getUsers(req, res) {
  res.status(200).json({
    response: "Este el get de los usuarios",
  });
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
