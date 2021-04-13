class Carro {
  constructor(modelo, marca, color) {
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
  }
  //Getters and setters
  getModelo() {
    return this.modelo;
  }
  getMarca() {
    return this.marca;
  }
  getColor() {
    return this.color;
  }
  setModelo(modelo) {
    this.modelo = modelo;
  }
  setMarca(marca) {
    this.marca = marca;
  }
  setColor(color) {
    this.color = color;
  }
}

const versa = new Carro("Versa MT", "Nissan", "Rojo");

console.log(versa);

console.log(versa.getColor());

console.log(versa.getMarca());

console.log(versa.setColor("Negro"));

console.log(versa.getColor());
