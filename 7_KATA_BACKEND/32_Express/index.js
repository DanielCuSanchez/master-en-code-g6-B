//Importaciones
const express = require("express");
//Constantes
const PORT = 3001;

const app = express();

//Midlewares
app.use(express.json());

//Rutas

app.get("/", (request, response) => {
  console.log("ENTRO ALGUIEN");
  response.json({ mensaje: "Esto es el GET" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log("ALGUIEN HIZO POST");
  res.json({ mensaje: "Esto es el POST" });
});

app.post("/login", (req, res) => {
  const usuarioValido = {
    email: "prueba@devf.mx",
    password: "1234",
  };

  // const losDatosAcceso = req.body;
  const { password, email } = req.body;

  console.log(losDatosAcceso);
  console.log(usuarioValido, "😀");
  console.log("ESTAN HACIENDO LOGIN");

  if (email === usuarioValido.email && password === usuarioValido.password) {
    res.json({ mensaje: "WUU!! Te has loggeado" });
  } else {
    res.status(400).json({ mensaje: "Revisa tus credenciales" });
  }
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.json({ mensaje: "Esto es el PUT" });
});

//Arranque del servidor
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
