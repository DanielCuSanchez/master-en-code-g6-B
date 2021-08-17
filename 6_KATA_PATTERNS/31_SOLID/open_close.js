// Una clase debería estar abierta a extensión, pero cerrada a modificación

// *** ❌ EJEMPLO 1 (NO OCP) : ***
// class Pokemon {
//   #name = "";
//   #type = ""

//   constructor(name, type) {
//     this.#name = name;
//     this.#type = type;
//   }

//   get name() {
//     return this.#name;
//   }

//   get type() {
//     return this.#type;
//   }

// }
// /*
//     Se genera una clase para procesar los ataques de
//     los pokemons dependiento del tipo de este.
// */
// class ProcessAttack {
//   /*
//       Se crea método que permite procesar los ataques 
//       de un listado de pokemons.
//   */
//   allPokemonAttack(pokemonList) {
//     const ATTACKS = pokemonList.reduce((output, pokemon) => {
//       let attack = "";
//       const { name, type } = pokemon;
//       /*
//           Se crea un listado de casos que permite asignar
//           un ataque dependiendo el tipo de pokemon.
//       */
//       switch (type) {
//         case "Electric":
//           attack = "Impactrueno ⚡️";
//           break;
//         case "Fire":
//           attack = "Aliento igneo 🔥";
//           break;
//         case "Water":
//           attack = "Pistola de agua 🔫";
//           break;
//         default:
//           attack = "Ataque base";
//       }
//       return `${output}${name}, ${attack}\n`;
//     }, "");
//     return ATTACKS;
//   }
// }
// // Se crean instancias de la clase pokemon
// const flareon = new Pokemon("Flareon", "Fire");
// const jolteon = new Pokemon("Jolteon", "Electric");
// const vaporeon = new Pokemon("Vaporeon", "Water");

// // Creamos una instancia de la clase ProcessAttack 
// const Attack = new ProcessAttack()
// // invocamos al método allPokemonAttack y enviamos las 
// // instancia de la clase pokemon
// const MSG = Attack.allPokemonAttack([flareon, jolteon, vaporeon]);
// console.log(MSG);
// 
/*
    Salida
    Flareon, Aliento igneo 🔥
    Jolteon, Impactrueno ⚡️
    Vaporeon, Pitsola de agua 🔫
*/


/**** ✅ Ejemplo 2 USANDO OCP:  ****/

class Pokemon {
  #name = "";
  #type = ""

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  /*
      Cargamos el metodo attack para que todas 
      las clases que hereden de pokemon puedan utilizarlo
  */
  get attack() {
    const { name } = this;
    return `${name}, Ataque base`;
  }

}

/*
    Por cada tipo de pokemon crearemos una nueva clase
    la cual heredara de la clase pokemon
*/
class TypeElectric extends Pokemon {
  constructor(name) {
    /*
        Invocamos el constructor de la clase pokemon
        y pasamos por defecto el tipo Electric
    */
    super(name, "Electric");
  }

  get attack() {
    const { name } = this;
    return `${name}, Impactrueno ⚡️`;
  }
}

class TypeFire extends Pokemon {
  constructor(name) {
    /*
        Invocamos el constructor de la clase pokemon
        y pasamos por defecto el tipo Fire
    */
    super(name, "Fire");
  }

  get attack() {
    const { name } = this;
    return `${name}, Aliento igneo 🔥`;
  }
}

class TypeWater extends Pokemon {
  constructor(name) {
    /*
        Invocamos el constructor de la clase pokemon
        y pasamos por defecto el tipo Water
    */
    super(name, "Water");
  }

  get attack() {
    const { name } = this;
    return `${name}, Pitsola de agua 🔫`;
  }
}

/*
    Se genera una clase para procesar los ataques de
    los pokemons dependiento del tipo de este.
*/
class ProcessAttack {
  /*
      Se crea método que permite procesar los ataques 
      de un listado de pokemons.
  */
  allPokemonAttack(pokemonList) {
    /*
        En este caso solo basta con recibir el listado de pokemons
        para porder ejecutar un ataque, ya que cada elemento del listado
        cuenta con su propio ataque.
    */
    const ATTACKS = pokemonList.reduce((output, pokemon) => {
      let msg = "";
      const { attack } = pokemon;
      return `${output}${attack}\n`;
    }, "");
    return ATTACKS;
  }
}

// Creamos una instancia de la clase ProcessAttack 
const Attack = new ProcessAttack()

// invocamos al método allPokemonAttack y enviamos las 
// instancia te cada tipo de pokemon
const MSG = Attack.allPokemonAttack([
  new TypeFire("Flareon"),
  new TypeElectric("Jolteon"),
  new TypeWater("Vaporeon"),
]);
console.log(MSG);
/*
    Salida 
    Flareon, Aliento igneo 🔥
    Jolteon, Impactrueno ⚡️
    Vaporeon, Pistola de agua 🔫
*/
