// TODO: Implementación de la cola.

class Queue {
  constructor() {
    this.collection = [];
  }
  enqueue(item) {
    // encolar o agregar a la cola ()
    this.collection.push(item);
    return this.collection.length;
  }
  dequeue() {
    // sacar primer elemento de la cola
    return this.collection.shift();
  }
  length() {
    // tamaño de la cola
    return this.collection.length;
  }
  isEmpty() {
    // está vacia la cola
    return this.collection.length === 0;
  }
  front() {
    // traer el peek o primer elemento
    return this.collection[0];
  }
}
// TODO: Ver ejemplos de una cola.
