const request = require('request')

// let personaje = {}
// console.time('GET')
// request.get('https://swapi.dev/api/people/2/', (error, response, body)=>{
//   if(response.statusCode === 200){
//     personaje = JSON.parse(body) // Parseando JSON a un objeto
//     console.log('Nombre:', personaje.name);
//     console.log('Altura:', personaje.height, 'cm');
//   }else{
//     console.log('algo salio mal')
//   }
//   console.timeEnd('GET')
// })

// EJERCICIO:
// crear una función para imprimir el nombre de un personaje y su planeta de nacimiento
// Ejemplo:
//   imprimirPersonaje(1)
//   // Soy Luke Skywalker y vengo de Tatooine
//   imprimirPersonaje(3)
//   // Soy R2-D2 y vengo de Naboo


function imprimirPersonaje(idPersonaje) {
  let nombrePersonaje = '', nombrePlaneta = ''
  let estado = 'cargando...'
  console.time('personaje')
  console.time('planeta')
  getCharacter(idPersonaje)
}

function getCharacter(id){
  request.get('https://swapi.dev/api/people/'+id, (error, response, body) => {
    const personaje = JSON.parse(body)
    nombrePersonaje = personaje.name
    estado = 'personaje'
    console.timeEnd('personaje')
    getPlanet(personaje.homeworld)
  })
}

function getPlanet(urlPlanet){
  // Peticion del planeta
  request.get(urlPlanet, (error, response, body) => {
    const planeta = JSON.parse(body)
    nombrePlaneta = planeta.name
    estado = 'planeta'
    console.timeEnd('planeta')
    console.log(`Hola soy ${nombrePersonaje} y vengo del planeta ${nombrePlaneta}`)
  })
}

imprimirPersonaje(3)