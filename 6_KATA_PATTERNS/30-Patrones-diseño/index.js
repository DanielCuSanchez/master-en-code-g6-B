//Ejemplo de object prototype

Object.prototype.logMio = () => {
  console.log(this);
};

const objeto = {
  nombre: "Sergio",
  edad: 25,
};

const objeto2 = {
  nombre: "Carlos",
  edad: 26,
};

// console.log(objeto);
// console.log(objeto2);

//Prototypes

let creadoraDeNuevaVariable = function () {};

creadoraDeNuevaVariable.prototype.saludo = "Hola";

//console.log(creadoraDeNuevaVariable.prototype);

const nuevaVariable = new creadoraDeNuevaVariable();

//console.log(nuevaVariable.saludo);

let Cliente = function () {};

Cliente.prototype.name = "Default name";

Cliente.prototype.setName = function (name) {
  this.name = name;
};

Cliente.prototype.getName = function () {
  return this.name;
};

let clienteJuan = new Cliente();

console.log("PROTOTYPES");
console.log(Cliente.prototype);

clienteJuan.setName("Juan");

console.log(clienteJuan.name);
//console.log(Cliente.prototype);

//Clases

class ClienteClase {
  constructor(name, edad) {
    this.name = name;
    this.edad = edad;
  }

  getName() {
    return this.name;
  }
}

const nuevoCliente = new ClienteClase("David", 22);

//console.log(nuevoCliente);

class creaNuevoClienteEcommerce {
  constructor(nombre, edad) {
    this.cliente = new ClienteClase(nombre, edad);
  }
}
class creaNuevoClienteDb {
  constructor(nombre, edad) {
    this.cliente = new ClienteClase(nombre, edad);
  }
}
class creaNuevoClienteJs {
  constructor(nombre, edad) {
    this.cliente = new ClienteClase(nombre, edad);
  }
}

//Funcional
function crearCliente(nombre, edad) {
  return new ClienteClase(nombre, edad);
}
