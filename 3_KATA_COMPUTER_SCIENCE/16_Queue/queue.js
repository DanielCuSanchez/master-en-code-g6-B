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
}
// TODO: Ver ejemplos de una cola.
const queue = new Queue();

//Añadimos elementos al queue
queue.enqueue({ nombre: "Shirliey", sexo: "M" });
queue.enqueue({ nombre: "Daniel Cu", sexo: "H" });

console.log(queue.length());

console.log(queue.isEmpty());

//Eliminamos elemento
queue.dequeue();

console.log(queue.front());
//Verificamos si el queue esta limpio
console.log(queue.isEmpty());

//Eliminamos elemento
queue.dequeue();

console.log(queue.length());

console.log(queue.isEmpty());
