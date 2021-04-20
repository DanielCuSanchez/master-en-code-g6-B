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
function fibo(num) {
  if(num < 2) {
      return num;
  }
  else {
      return fibo(num-1) + fibo(num - 2);
  }
}

// Creando arreglo con serie de Fibonacci
numeros = []
let nTerms = 13
for(let i = 0; i <= nTerms; i++) {
    numeros.push(fibo(i));
}
console.log(numeros)