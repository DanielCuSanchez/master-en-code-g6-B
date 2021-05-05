/* Ejercicio:
 crear una función de búsqueda que reciba un número y un arreglo de números ordenado, 
 el valor que debe devolver es el índice dónde se encuentra este número 
 o en caso de no estar dentro del arreglo devolverá -1
 Ejemplo:
    let respuesta = buscarNumero(14, sortedArray)
    respuesta === 4
 */
//[0,1,2,3] //4
function buscarNumero(num, arreglo) {
  let inicio = 0; //0
  let fin = arreglo.length - 1; //19
  let veces = 0;
  while (inicio <= fin) {
    veces++;
    let mitad = Math.floor((inicio + fin) / 2);
    if (arreglo[mitad] === num) {
      console.log("El número está en el indice: ", mitad);
      console.log("Se hicieron", veces, "operaciones");
      return mitad;
    } else if (num > arreglo[mitad]) {
      inicio = mitad + 1;
    } else {
      fin = mitad - 1;
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
const lista2 = [1, 2, 3];

//buscarNumero(19, sortedArray);
buscarNumero(3, lista2);
