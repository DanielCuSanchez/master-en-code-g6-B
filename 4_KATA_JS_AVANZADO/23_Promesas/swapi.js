const axios = require('axios')
// EJERCICIO:
// crear una función para imprimir el nombre de un personaje y su planeta de nacimiento
// Ejemplo:
//   imprimirPersonaje(1)
//   // Soy Luke Skywalker y vengo de Tatooine
//   imprimirPersonaje(3)
//   // Soy R2-D2 y vengo de Naboo
let nombrePersonaje = ''
let nombrePlaneta = ''

function getPlanet(urlPlanet){
  axios.get(urlPlanet)
    .then(response =>{
      let planet = response.data
      nombrePlaneta = planet.name
      console.log(`Soy ${nombrePersonaje} y vengo del planeta ${nombrePlaneta}`);
    }).catch(error =>{
      console.error(error);
    })
}

function imprimirPersonaje(idPersonaje){
  axios.get('https://swapi.dev/api/people/'+idPersonaje)
    .then((response) => {
      let personaje = response.data
      nombrePersonaje = personaje.name
      getPlanet(personaje.homeworld)
    }).catch(error =>{
      console.error(error);
    })
}

imprimirPersonaje(1)