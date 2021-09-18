const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const userRoutes = require("./users.routes");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const URL = "mongodb+srv://daniel:devfdevf@cluster0.kbonr.mongodb.net/test";

const initDatabase = async () => {
  mongoose.connect(URL);

  const database = mongoose.connection;

  database.on("error", (error) => console.log(error));

  await database.once("open", () => {
    console.log("Database connected 😀");
  });
};

initDatabase();

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
