// Escriba un programa que cree una cadena que represente una cuadrícula de 8 × 8, utilizando caracteres de nueva línea para separar líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los personajes deben formar un tablero de ajedrez.
// Pasar esta cadena a console.logdebería mostrar algo como esto:


const size = 8
let acumulador = ''
for (let contador = 0; contador < size; contador++) {
    if( contador % 2 === 1 ){
        acumulador += " # # # #\n"
    }else{
        acumulador += "# # # # \n"
    }
}

console.log(acumulador);