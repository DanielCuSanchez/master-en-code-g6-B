// 1) Luis quiere hacer un arreglo de los dias de la semana con todos los nombres en minusculas.
// ¿Como lo declararia?

var dias = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]


// a) Con ese arreglo  Luis tiene que recorrer los dias de la semana con un ciclo y convertir cada dia a mayuscula.

for(let i = 0 ; i < dias.length ; i++){
    console.log(dias[i].toLocaleUpperCase())
}

// b) La solucion que logro luis ahora la tiene que convertir en una solucion de tipo funcion. Dicha funcion tiene que recibir como parametro un arreglo y devuelve los elementos del arreglo en mayuscula.

function convertirArregloMayuscula( arreglo ){
    var arregloEnMayusculas = []
    for(let i = 0 ; i < dias.length ; i++){
        arregloEnMayusculas.push(arreglo[i].toLocaleUpperCase())
    }
    return arregloEnMayusculas
}

var nuevoArreglo = convertirArregloMayuscula(dias)

console.log(nuevoArreglo);

// 3) Dada la siguiente lista
var senseis = ["Dany Park","Shir","Dani Cu"]
// a) Generar un arreglo con los nombres de su equipo.

var equipo = [ "lore", "sofi", "valeria"]

// b) Concatenar el arreglo de senseis con el nuevo arreglo de intregantes de equipo.

var arregloMixto = senseis.concat(equipo)

// c) Imprimir la longitud del nuevo arreglo
console.log(arregloMixto.length)

// d) Crear una funcion que reciba como parametro un nombre y un arreglo. Dentro de la funcion eliminar del arreglo el nombre que se pasa por parametro. La funcion debe devolver el nuevo arreglo sin el elemento eliminado.

function eliminarMiembro( nombre , arreglo){
    var nuevoArreglo = arreglo.filter(function(miembro){
        if(miembro !== nombre ){
            return nombre
        }
        return
    })
    return nuevoArreglo
}

var nuevoArregloMixto = eliminarMiembro("lore", arregloMixto)

console.log(nuevoArregloMixto);