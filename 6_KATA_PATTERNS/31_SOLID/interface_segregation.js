/** Ayuda a no obligar a las clases a implementar métodos que no van a utilizar */

// *** ❌ EJEMPLO 1: ***

// class Pokemon {
//   #name = "";
//   #type = "";

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
//   /*
//       Agregamos dós nuevos métodos
//       los cuales establecen habilidades que 
//       puede tener un pokemon.
//   */
//   get canFly() {
//     return "Puedo volar";
//   }

//   get canSwim() {
//     return "Puedo Nadar";
//   }
// }


// /*
//     Creamos las clase Charizard que 
//     hereda de la clase Pokemon por lo
//     cual tomara todos los métodos.
// */
// class Charizard extends Pokemon {
//   constructor() {
//     super("Charizard", "Fire");
//   }

//   // En este caso Charizard puede volar
//   get canFly() {
//     return `Soy ${this.name} y puedo volar`;
//   }

//   // Charizar no puede nadar
//   get canSwim() {
//     return `No puedo nadar por que soy de tipo ${this.type}`;
//   }
// }


// /*
//     Creamos las clase Blastoise que 
//     hereda de la clase Pokemon por lo
//     cual tomara todos los métodos.
// */
// class Blastoise extends Pokemon {
//   constructor() {
//     super("Blastoise", "Water");
//   }

//   get canFly() {
//     return `No puedo volar por que soy de tipo ${this.type}`;
//   }

//   get canSwim() {
//     return `Soy ${this.name} y puedo nadar`;
//   }
// }

// const CHARIZARd = new Charizard();
// console.log(CHARIZARd.canFly);
// console.log(CHARIZARd.canSwim);
// /*
//     output
//     Soy Charizard y puedo volar
//     No puedo nadar por que soy de tipo Fire
// */

// const BLASTOISE = new Blastoise();
// console.log(BLASTOISE.canFly);
// console.log(BLASTOISE.canSwim);
// /*
//     output
//     No puedo volar por que soy de tipo Water
//     Soy Blastoise y puedo nadar
// */


/**** ✅ Ejemplo 2:  ****/
class Pokemon {
  #name = "";
  #type = "";

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
}

/*
    Para simular el uso de una interfaz vamos a crear
    un mix-in de la siguiente manera 
    const [Nombre] = (clasePadre) => class extends [clasePadre]
*/
const Fly = ClasePadre => class extends ClasePadre {
  /* un mixin puede tener el numero de métodos
    que necesitemos implementar.
  */
  get canFly() {
    return `Soy ${this.name} y puedo volar`;
  }
}

/*
     Se crea el segundo mixin para poder aplicar
     el método de nadar solo para ciertos pokemons
*/
const Swim = ClasePadre => class extends ClasePadre {
  get canSwim() {
    return `Soy ${this.name} y puedo nadar`;
  }
}

/*
    para poder utilizar una herencia multiple en
    Javascript implementaremoos nuestro mix-in de
    la siguiente manera
    
    class [SubClase] extends Mixin(ClasePadre) {}
*/
class Charizard extends Fly(Pokemon) {
  constructor() {
    super("Charizard", "Fire");
  }
}

/*
    Al utilizar el mixin nuestra clase Blastoise
    toma los métodos y atributos de la clase Swim
    y Pokemon
*/
class Blastoise extends Swim(Pokemon) {
  constructor() {
    super("Blastoise", "Water");
  }
}


/*
    Para los casos donde un pokemon no 
    tenga la habillidad de voloar o nadar
    solo tiene que heredar de Pokemon
*/
class Gengar extends Pokemon {
  constructor() {
    super("Gengar", "Ghost");
  }
}

const CHARIZARd = new Charizard();
console.log(CHARIZARd.canFly);
/*
    output
    Soy Charizard y puedo volar
*/


const BLASTOISE = new Blastoise();
console.log(BLASTOISE.canSwim);
/*
    output
    Soy Blastoise y puedo nadar
*/

