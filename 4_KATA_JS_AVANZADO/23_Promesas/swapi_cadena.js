const axios = require('axios')
// EJERCICIO:
// crear una función para imprimir el nombre de un personaje y su planeta de nacimiento
// Ejemplo:
//   imprimirPersonaje(1)
//   // Soy Luke Skywalker y vengo de Tatooine
//   imprimirPersonaje(3)
//   // Soy R2-D2 y vengo de Naboo

function getPlaneta(urlPlanet){
  return axios.get(urlPlanet)
}

function getPersonaje(idPersonaje){
  return axios.get('https://swapi.dev/api/people/'+idPersonaje)
}

function imprimirPersonaje(id){
  let nombrePersonaje = ''
  let nombrePlaneta = ''

  getPersonaje(id)
    .then((response) => {
      let personaje = response.data
      nombrePersonaje = personaje.name
      return getPlaneta(personaje.homeworld)
    }).then(response =>{
      let planet = response.data
      nombrePlaneta = planet.name
      console.log(`Soy ${nombrePersonaje} y vengo del planeta ${nombrePlaneta}`);
    }).catch(error =>{
      console.error(error);
    })
}

imprimirPersonaje(1)