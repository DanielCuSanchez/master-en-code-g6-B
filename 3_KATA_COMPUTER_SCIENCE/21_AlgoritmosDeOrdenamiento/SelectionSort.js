let numeros = [
    2, 1, 3, 22, 7, 5, 0, 9, 4, 25
]// 0, 1, 2, 3,  4, 5, 6, 7, 8, 9

// numeros[indexMin] = numeros[0] = 2
// numeros[indexMin] = numeros[1] = 1
// numeros[indexMin] = numeros[6] = 0

function SelectionSort(arreglo){
  let operaciones = 0

  for(i=0; i < arreglo.length; i++){
    let indexMin = i // posición del número menor (asumimos que es el primer número)
    for(j=i; j < arreglo.length; j++){
      if(arreglo[i] > arreglo[j]){
        indexMin = j
      }
      operaciones++
    }

    if(indexMin !== i){ // Hacemos intercambio de valores (swap)
      let temp = arreglo[i]
      arreglo[i] = arreglo[indexMin]
      arreglo[indexMin] = temp
    }

  }
  console.log('Se hicieron', operaciones, 'operaciones');
  return arreglo
}

console.log('Arreglo antes:', numeros)
numeros = SelectionSort(numeros)
console.log('Arreglo después:', numeros)

