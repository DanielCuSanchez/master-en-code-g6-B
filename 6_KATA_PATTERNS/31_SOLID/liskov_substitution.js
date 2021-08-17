/** Liskov Substitution  
 * Si S es un subtipo de T, 
 * los objetos de tipo T en un programa pueden reemplazarse 
 * por objetos de tipo S 
 * sin alterar ninguna de las propiedades del programa. 
 * FOR DUMMIES: Las clases hijo deben poder hacer todo lo que hace su clase padre
**/

// *** ❌ EJEMPLO 1: ***

class Animal {
  caminar(){
    console.log('caminé!')
  }
  saltar(){
    console.log('Salté!')
  }
}


function brincarHoyo(animal){
  animal.caminar()
  // ve el hoyo
  animal.saltar()
  animal.caminar()
}

class Elefante extends Animal {
  saltar(){
    throw new Error("Un elefante no puede saltar unu")
  }
}

const perrito = new Animal()
const elefantin = new Elefante()

console.log('Perrito:');
brincarHoyo(perrito)
console.log('Elefante:');
brincarHoyo(elefantin)


/**** ✅ Ejemplo 2:  ****/

// class Animal {
//   caminar() {
//     console.log('caminé!')
//   }
// }

// class AnimalLigero extends animal {
//   saltar() {
//     console.log('Salté!')
//   }
// }

// function brincarHoyo(animal) {
//   animal.caminar()
//   animal.saltar()
//   animal.caminar()
// }


// const perrito = new AnimalLigero()
// const elefantin = new Animal()

// brincarHoyo(perrito)
// brincarHoyo(elefantin)

// /** Más ejemplos: 
//  * https://medium.com/@jmz12/javascript-los-cinco-principios-de-solid-a4f738bec325 */