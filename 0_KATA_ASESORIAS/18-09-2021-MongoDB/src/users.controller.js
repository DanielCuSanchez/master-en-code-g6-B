const User = require("./User");

const postOneUser = async (req, res) => {
  const user = req.body;

  const resp = await User.create(user);

  if (resp) {
    res.status(200).json(resp);
  } else {
    res.status(400).json(resp);
  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.find({ _id: id });
  res.status(200).json(user);
};
module.exports = { postOneUser, getUsers, getOneUser };
