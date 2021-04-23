// RETO: crear una manera de añadir valores de forma ordenada a nuestro arreglo

const sortedArray = [
  5,
  11,
  12,
  14,
  15,
  18,
  19,
  21,
  23,
  25,
  27,
  28,
  30,
  32,
  37,
  198,
];

// const funcionComparadora = function (a, b){
//   if (a > b){
//     return 1
//   }
//   if(b > a){
//     return -1
//   }
//   return 0
// }

const addValue = function (value) {
  sortedArray.push(value);
  // sortedArray.sort(funcionComparadora)
  // Todo lo anterior se puede resumir al método sort pasando
  // el siguiente arrow function:
  // sortedArray.sort(function (a, b) {
  //   return a - b;
  // });

  sortedArray.sort((a, b) => a - b);
  //sortedArray.sort(resta(a, b));

  //(a, b) => a - b; arrow function o funcion flecha
};

addValue(6);
addValue(16);

console.log(sortedArray);

//ES6
// function suma(n1, n2) {
//   return n1 + n2;
// }

// const suma = (n1, n2) => {
//   return n1 + n2;
// };

// const suma = (n1, n2) => n1 + n2;
// const resta = (n1, n2) => n1 - n2;
