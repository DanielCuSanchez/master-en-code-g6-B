// TODO: Implementación de la cola.

class Queue {
  constructor() {
    this.collection = [];
  }
  // encolar o agregar a la cola ()
  enqueue(item) {
    this.collection.push(item);
    return this.collection.length;
  }
  // sacar primer elemento de la cola
  dequeue() {
    return this.collection.shift();
  }
  // tamaño de la cola
  length() {
    return this.collection.length;
  }
  // está vacia la cola
  isEmpty() {
    return this.collection.length === 0;
  }
  // traer el peek o primer elemento
  front() {
    return this.collection[0];
  }
  // traer el peek o el ultimo elemento
  back() {
    return this.collection[this.collection.length - 1];
  }
}

// TODO: Ver ejemplos de una cola.
const miFilaHamburguesas = new Queue();

// console.log(miFilaHamburguesas.length());
// console.log(miFilaHamburguesas.isEmpty());

// let personas = [
//   { nombre: "Shirliey", sexo: "M" },
//   { nombre: "Daniel Cu", sexo: "H" },
//   { nombre: "Dani Parc", sexo: "H" },
// ];

//Añadimos elementos al queue
miFilaHamburguesas.enqueue({ nombre: "Shirliey", sexo: "M" });
miFilaHamburguesas.enqueue({ nombre: "Daniel Cu", sexo: "H" });
miFilaHamburguesas.enqueue({ nombre: "Dani Parc", sexo: "H" });

console.log(miFilaHamburguesas.length());
console.log(miFilaHamburguesas.isEmpty());

// Eliminamos elemento
console.log(miFilaHamburguesas.dequeue());

console.log(miFilaHamburguesas.length());
console.log(miFilaHamburguesas.isEmpty());

console.log(miFilaHamburguesas.front());
console.log(miFilaHamburguesas.back());

// Eliminamos elemento
// miFilaHamburguesas.dequeue();

// console.log(miFilaHamburguesas.length());

// console.log(miFilaHamburguesas.isEmpty());
