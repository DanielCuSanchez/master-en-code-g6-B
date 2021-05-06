const factorial = (numero) => {
  //4  //3 //2 //1
  if (numero === 0) {
    return 1; //0
  }
  return numero * factorial(numero - 1); //5 * //4 (24)  //3 (6) //2 (2) //1 (1) //0 (1)
};

const resultado = factorial(5);

console.log(resultado);
