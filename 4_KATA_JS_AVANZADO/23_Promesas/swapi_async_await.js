const axios = require("axios");

function getPlaneta(urlPlaneta) {
  return axios.get(urlPlaneta);
}

function getPersonaje(idPersonaje) {
  return axios.get("https://swapi.dev/api/people/" + idPersonaje);
}

async function imprimirPersonaje(idPersonaje) {
  let nombrePlaneta = "",
    nombrePersonaje = "";
  let responsePersonaje = await getPersonaje(idPersonaje);
  nombrePersonaje = responsePersonaje.data.name;
  let responsePlaneta = await getPlaneta(responsePersonaje.data.homeworld);
  nombrePlaneta = responsePlaneta.data.name;
  console.log(`Soy ${nombrePersonaje} y vengo del planeta ${nombrePlaneta}`);
  return "todo chido!";
}

imprimirPersonaje(100)
  .then((respuesta) => {
    console.log(respuesta);
    // Pintar la respuesta en mi DOM
  })
  .catch((error) => {
    console.log("algo falló", error);
    // Pintar un mensaje de error en mi DOM
  });
