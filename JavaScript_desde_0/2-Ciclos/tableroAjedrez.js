// Escriba un programa que cree una cadena que represente una cuadrícula de 8 × 8, utilizando caracteres de nueva línea para separar líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los personajes deben formar un tablero de ajedrez.
// Pasar esta cadena a console.logdebería mostrar algo como esto:


const size = 3
let tabla = ''
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if( ( i + j) % 2 == 0 ){
            tabla += "_"
        }else{
            tabla += "#"
        }
    }
    tabla += "\n"
}
console.log(tabla);
// console.log("Hola\nNueva linea")

// console.log("Hola")