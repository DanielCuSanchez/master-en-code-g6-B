function printArguments(...arguments) {
    console.log(arguments.length);
}

//printArguments(1, 2, 3, 4, 5)



const OPERACIONES = {
        SUMA: 1,
        RESTA: 2,
        MULTIPLICACION: 3,
        DIVISION: 4
    }
    /**Params: operacion, argumentoss */
function calculadora(tipo, ...arguments) {
    let respuesta = 0
    switch (tipo) {
        case OPERACIONES.SUMA:
            respuesta = suma(...arguments)
            break
        case OPERACIONES.RESTA:
            respuesta = resta(...arguments)
            break
        case OPERACIONES.MULTIPLICACION:
            respuesta = multiplicacion(...arguments)
            break
        case OPERACIONES.DIVISION:
            respuesta = division(...arguments)
            break
        default:
            respuesta = "Operación no válida"
    }

    return respuesta
}

/**Params: arreglo de numeros para sumar */
function suma(...arguments) {

    let suma = 0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]
    }
    return suma
}

/**Params: arreglo de numeros para restar */

function resta(...arguments) {

    let restaAcum = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        restaAcum -= arguments[i]
    }
    return restaAcum
}

/**Params: tablas de multiplicar */

function multiplicacion(...arguments) {
    let numeroTablas = arguments.length
    let tabla = ""
    for (let i = 0; i < numeroTablas; i++) {
        for (let j = i; j <= 10; j++) {
            tabla += ` ${j} x  ${arguments[i]}  = ${ j * arguments[i] }`
            tabla += '\n'
        }
        tabla += '\n'
    }
    return tabla
}

/**Params: divisor/dividiendo */

function division(...arguments) {
    return arguments[0] / arguments[1]
}

console.log(calculadora(OPERACIONES.SUMA, 1, 1, 1, 2))
console.log(calculadora(OPERACIONES.RESTA, 50, 5))
console.log(calculadora(OPERACIONES.MULTIPLICACION, 10, 5, 7))
console.log(calculadora(OPERACIONES.DIVISION, 10, 5))