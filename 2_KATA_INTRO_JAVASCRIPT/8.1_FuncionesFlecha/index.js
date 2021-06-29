function saludar(nombre) {
  return `Hola ${nombre}`;
}

const funcionFlecha = () => {};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

console.log(saludar("Alejandra"));
console.log(saludar2("Alejandra2"));

function funcion1(param1, param2) {
  const resultado = param1 * 2;
  param2(resultado, error);
}

funcion1(2, (resultado, error) => {
  console.log(resultado, error);
});
