// Funciones que reciben otras funciones:
// const funcionDeOrdenSuperior =  (callback, a, b) => {
//   const resultado = callback(a, b)
//   console.log(resultado)
//   return resultado
// }
// const suma = (a, b) => a+b
// const resta = (a, b) => a-b
// funcionDeOrdenSuperior(suma, 48, 2)
// funcionDeOrdenSuperior(resta, 32, 12)

// Ejemplo de función fibonacci secuencial:
// function fibonacci(numero){
//   let numeros=[0,1];
//   for (let i = 2; i < numero; i++) {
//       numeros[i] = numeros[i - 2] + numeros[i - 1];
//   }
//   return numeros;
// }

// Ejemplo de función de Fibonacci RECURSIVA

/**
 *
 *
 * La sucesión comienza con los números 0 y 1;
 * 2​ a partir de estos
 * «cada término es la suma de los dos anteriores»,
 */
function fibo(num) {
  debugger;
  //1
  if (num < 2) {
    //1<2
    return num;
  } else {
    return fibo(num - 1) + fibo(num - 2); //return 2
    //3-1=2 regreso=1   3-2=1 regreso 1
    //2-1=1 regreso=1
    //2-2=0 regreso=0
  }
}

//Creando arreglo con serie de Fibonacci
numeros = [];
let nTerms = 13;
for (let i = 0; i <= nTerms; i++) {
  numeros.push(fibo(i));
  //console.log(fibo(i));
}
console.log(numeros);

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
