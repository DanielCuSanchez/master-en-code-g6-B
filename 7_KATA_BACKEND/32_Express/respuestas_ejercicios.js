//Importaciones
const express = require("express")
const axios = require('axios')

//Constantes
const PORT = 3001

const app = express()

//Midlewares
app.use(express.json())

// Home Api
app.get("/", (_, response) => {
  response.send(`<h1>Ejercicios básicos Express JS</h1>`)
})

// Ejercicio 1
// Agrega un endpoint '/api/' que responda a una petición de tipo GET con un código de estado 200 
// y el siguiente json:
// { 'mensaje': 'hola mundo' }
app.get("/api/", (_, response) => {
  response.status(200).json({ mensaje: 'hola mundo' })
})

// Ejercicio 2
// Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números 
// que reciba mediante las querys num1 y num2.
// El servidor debe responder con un código de estado 200 y un json como el siguiente:
// { 'resultado': 7 }
app.get("/api/suma/", (request, response) => {
  // console.log(request.query);
  const { num1, num2 } = request.query
  const resultado = parseFloat(num1) + parseFloat(num2)
  if(!isNaN(resultado)){
    response.status(200).json({resultado})
  }else{
    response.status(400).json({ mensaje: 'Hubo un error, revisa tus query parameters.' })
  }
})

// Ejercicio 3
// Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET
// con el nombre que sea recibido a través de params.
// El servidor debe responder con un código de estado 200 y un json como este:
// { 'usuario': 'Edwin' }
app.get("/api/usuario/:nombre/", (request, response) => {
  // console.log(request.params)
  const { nombre } = request.params
  response.status(200).json({ usuario: nombre })
})

// Ejercicio 4
// Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje 
// solicitado de https://swapi.dev/. 
// El cliente debe mandar el número de personaje mediante params.
// La respuesta del servidor debe lucir algo así
// {
//   'personaje': {
//     'name': 'Luke Skywalker',
//                         ...,
//   }
// }
app.get("/api/swapi/:numero", async (request, response) => {
  const { numero } = request.params
  if(numero){
    const respApi = await axios.get(`https://swapi.dev/api/people/${numero}`)
      .then(resp=>resp.data)
      .catch(error => response.json({mensaje: `Falló la petición a la Swapi: ${error}`}))
    
    response.json({personaje: respApi})
  }else{
    response.json({ mensaje: `Falló la petición a la Swapi: ${error}` })
  }
})

/** Ejercicio 5
 Agrega un endpoint '/api/body que responda a una petición de tipo PUT con el body que el cliente 
 envíe al hacer la petición. 
 Ejemplo: cliente envía un body desde postman o insomnia que luce como este:
 { “nombre”: “Maui”, “ocupacion”: “Sensei” }
 Entonces, el servidor debe responder con un objeto idéntico al que envía el cliente,
 junto con un status de respuesta 200.
*/
app.put('/api/body/', (request, response) => {
  response.json(request.body)
})

// Ejercicio 6
// Vuelve a hacer el ejercicio 2 pero enviando num1 y num2 desde el body, 
// a través de una petición POST que responda con el status 200
app.post("/api/suma/", (request, response) => {
  const { num1, num2 } = request.body
  const resultado = num1 + num2
  if (!isNaN(resultado)) {
    response.status(200).json({ resultado })
  } else {
    response.status(400).json({ mensaje: 'Hubo un error, revisa tus query parameters.' })
  }
})

// Crea un endpoint para una petición de tipo DELETE donde envíes un ID(un número cualquiera) a través de params.
// Si el param contiene el ID 3, entonces responde con un status 200 y el mensaje 
// “se ha eliminado el objeto con ID 3”,
// de lo contrario, si envían cualquier otro número como ID, responde con un status 404 y el mensaje:
// “No se encontró el objeto con el ID especificado”.
app.delete("/api/usuario/:id", (request, response) => {
  const { id } = request.params
  if (id === '3') {
    response.status(200).json({ mensaje: 'Se ha eliminado el objeto con ID 3' })
  } else {
    response.status(404).json({ mensaje: `No se encontró el objeto con el ID ${id} especificado`})
  }
})


//Arranque del servidor
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
