/* Ejercicio:
 crear una función de búsqueda que reciba un número y un arreglo de números ordenado, 
 el valor que debe devolver es el índice dónde se encuentra este número 
 o en caso de no estar dentro del arreglo devolverá -1
 Ejemplo:
    let respuesta = buscarNumero(14, sortedArray)
    respuesta === 4
 */

function buscarNumero(num, arreglo) {
  let index = 0;
  for (index = 0; index < arreglo.length; index++) {
    if (arreglo[index] === num) {
      console.log("El número está en el indice: ", index);
      console.log("Se hicieron", index, "operaciones");
      return index;
    }
  }
  console.log("El número no está");
  console.log("Se hicieron", veces, "operaciones");
  return -1;
}

const sortedArray = [
  5,
  6,
  11,
  12,
  14,
  15,
  18,
  19,
  21,
  22,
  23,
  25,
  27,
  28,
  30,
  32,
  37,
  198,
];

buscarNumero(198, sortedArray);
