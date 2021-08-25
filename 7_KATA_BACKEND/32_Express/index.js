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

  //console.log(losDatosAcceso);
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

// QUERY PARAMS
app.get("/search", (req, res) => {
  console.log(req.query);
  if (req.query.name) {
    res.status(200).json({ mensaje: `Hola ${req.query.name}` });
  } else {
    res.status(400).json({ mensaje: "Se requiere query parameter name" });
  }
});

// URL PARAMS
app.get("/pokemon/:nombre_poke", (req, res) => {
  console.log(req.params);
  // Aquí consultariamos a una base de datos (próximamente...)
  res.json({ nombre: req.params.nombre_poke, poder: 99999, tipo: "unknown" });
});
app.get("/pokemon/:nombre_poke/ataque/:id_ataque", (req, res) => {
  console.log(req.params);
  const { id_ataque, nombre_poke } = req.params;
  // Aquí consultariamos a una base de datos (próximamente...)
  res.json({ id: id_ataque, nombre: "Ipactrueno", poder: 399 });
});
app.delete("/pokemon/:id_poke", (req, res) => {
  console.log("Delete:", req.params);
  // Aquí deberíamos borrar el poke de la base de datos
  res.json({ mensaje: `Recurso ${req.params.id_poke} eliminado` });
});

//Arranque del servidor
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
