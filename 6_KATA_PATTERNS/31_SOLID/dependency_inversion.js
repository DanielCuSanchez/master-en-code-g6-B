const fetch = require('node-fetch');

/**
 * Los módulos de alto nivel no deben depender de los módulos de bajo nivel, 
 * Ambos tiene que depender de abstracciones.
 * Las abstracciones no deben depender de los detalles.
 * Los detalles deben depender de abstracciones.
 */

// *** ❌ EJEMPLO 1: ***
// Creamos el client para la solicitud del api.
// class ApiPokemon {
//   getInfo(name) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('*********>>>');
//         console.log(data);
//       }).catch(error=>{
//         console.error(error);
//       })
//   }
// }

// // Creamos la clase pokedex
// class Pokedex {
//   #pokemons = []
//   #Api = null
//   constructor(pokemons) {
//     this.#pokemons = pokemons;
//     /*
//         En este punto se a creado a una dependencias especifica
//         sin importar el tipo de dependendencia tendriamos que poder
//         utilizar el método getInfo
//     */
//     this.#Api = new ApiPokemon();
//   }

//   getInfo() {
//     this.#pokemons.forEach(pokemon => {
//       this.#Api.getInfo(pokemon);
//     });
//   }
// }

// // creo mi listado de pokemons
// const LIST = [
//   "charizard",
//   "eevee",
//   "pikachu",
// ];
// // creamos la instancia del pokedex
// const POKEDEX = new Pokedex(LIST);

// // genero la petición de la data.
// POKEDEX.getInfo();







/**** ✅ Ejemplo 2:  ****/
/*
    Generamos algunos cambios en la clase 
    con los cuales ya no generamos una dependencia
    de algun modulo en especifico sino que solo inyectamo
    la dependencia que utilizaremos.
*/
class Pokedex {
  #pokemons = [];
  #source = null;

  constructor(pokemons, source) {
    this.#pokemons = pokemons;
    this.#source = source;
  }

  getInfo() {
    this.#pokemons.forEach(pokemon => {
      /*
          Al inyectar la dependencia solo bastara con utilizar
          el método que requerimos utilizar.
      */
      this.#source.getInfo(pokemon);
    });
  }
}


// Creamos el client para la solicitud del api. utilizando fetch
class SourceApi {
  getInfo(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}

// Creamos el client para la solicitud del api. desde un json
class SourceJson {
  getInfo(name) {
    const DATA = require("./Pokemons.json");
    const INFO = DATA[name] || "";
    console.log(INFO);
  }
}

// creo mi listado de pokemons
const LIST = [
  "charizard",
  "eevee",
  "pikachu",
];

const API = new SourceApi(); // o puede ser SourceJson();
// creamos al instancia del pokedex
const POKEDEX = new Pokedex(LIST, API);
// genero la impresión de la data.
POKEDEX.getInfo();