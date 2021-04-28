// TODO: Implementación de la pila.

class Stack {
  constructor() {
    this.counter = 0;
    this.collection = [];
  }
  // agregarElementoPush(nuevo) {
  //   this.collection.push(nuevo);
  // }
  // eliminarElementoPop() {
  //   this.collection.pop();
  // }

  push(nuevoElemento) {
    console.log("counter", this.counter);
    this.collection[this.counter] = nuevoElemento;
    this.counter++;
    return this.counter;
  }

  pop() {
    // pop te trae el último elemento que agregaste y lo elimina
    if (length() === 0) {
      return null;
    }
    const deleteElement = this.collection[this.counter];
    delete this.collection[this.counter];
    this.counter--;
    return deleteElement;
  }

  length() {
    // tamaño de la pila
    return this.counter;
  }
  peek() {
    // peek te trae el último elemento que agregaste
    if (this.length() === 0) {
      return null;
    }
    return this.collection[this.counter];
  }
}

const miPila = new Stack();
console.log(miPila.push("Lorena"));

console.log(miPila.push("Laura"));

console.log(miPila.push("Alejandra"));

console.log(miPila.length());

console.log(miPila.pop());
console.log(miPila.length());

console.log(miPila.pop());
console.log(miPila.length());

console.log(miPila.pop());
console.log(miPila.length());
