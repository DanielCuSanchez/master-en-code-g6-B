const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("primero middleware");
  next();
});

app.use((req, res, next) => {
  console.log("segundo middleware");
  next();
});

app.use((req, res, next) => {
  console.log("tercer middleware");
  console.log("😀");
  console.log("🐊");
  //res.send("tercer middleware");
  next();
});

app.get("/", (req, res) => {
  console.log("soy el get");
  res.json({
    msg: "hola mundo",
  });
});

app.listen(3000, () => console.log("Servidor encendido 🚀"));
