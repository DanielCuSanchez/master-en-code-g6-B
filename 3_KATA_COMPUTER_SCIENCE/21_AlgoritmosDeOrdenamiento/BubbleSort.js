let numeros = [
  2, 1, 3, 22, 7, 5, 0, 9, 4, 25
]

function BubbleSort (arreglo) {
  let operaciones = 0
  let long = arreglo.length // cantidad de numeros a considerar para comparación
  for (let i = 0; i < arreglo.length; i++) {
    long--
    for (let j = 0; j < long; j++) {
      if(arreglo[j] > arreglo[j+1]){
        const temp = arreglo[j]
        arreglo[j] = arreglo[j+1]
        arreglo[j+1] = temp
      }
      operaciones++
    }
  }
  console.log('Se hicieron:', operaciones, 'operaciones');
  return arreglo
}

console.log('antes', numeros)
numeros = BubbleSort(numeros)
console.log('después', numeros)
