// Escriba un programa que cree una cadena que represente una cuadrícula de 8 × 8, utilizando caracteres de nueva línea para separar líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los personajes deben formar un tablero de ajedrez.
// Pasar esta cadena a console.logdebería mostrar algo como esto:
// console.log("Hola\nNueva linea")

// console.log("Hola")

//Solucion 1
const SIZE = 8
let tabla = ''
for (let i = 1; i <= SIZE; i++) {
    for (let j = 1; j <= SIZE; j++) {
        if( ( i + j) % 2 == 0 ){
            tabla += "_"
        }else{
            tabla += "#"
        }
    }
    tabla += "\n"
}
//console.log(tabla);


//Solucion 2
let tableroDibujado = ''
const sizeTablero = 10
for (let filas = 1; filas <= sizeTablero; filas++) {
    for (let columnas = 0; columnas < sizeTablero; columnas++) {
        if((filas+columnas) % 2 === 1){
            tableroDibujado += '⬜'
        }else{
            tableroDibujado += '⬛'
        }
    }
    tableroDibujado += '\n'
}
//console.log(tableroDibujado)


//Solucion dany parc
var size = 16
var board = ''
var color = true // true='⬜' - false='⬛'
for (let i = 1; i <= size*size; i++) {
  if(color){
    board += '⬜'
  }else{
    board += '⬛'
  }
  if((i%size)===0){
    board += '\n'
    if((size%2)!==0){
      color = !color
    }
  }else {
    color = !color
  }
}
console.log(board);