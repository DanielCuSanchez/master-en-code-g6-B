class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludito() {
        console.log("Hola");
    }
}


//El buen uso de clases

class Doctor extends Persona {

    constructor(nombre, edad, cedula) {
        super(nombre, edad)
        this.cedula = cedula
    }


}

class Dentista extends Doctor {

    constructor(nombre, edad, cedula, experiencia) {
        super(nombre, edad, cedula)
        this.experiencia = experiencia
    }

}

let nombresDoctores = ["Jaime", "Pedro", "Parc"]

let doctores = []

for (let i = 0; i < nombresDoctores.length; i++) {
    doctores.push(new Doctor(nombresDoctores[i], 12, 123))
}

console.log(doctores)

// VS NO utilizar clases

// class Dentista {

//     constructor(nombre, edad, cedula, experiencia) {

//         this.experiencia = experiencia
//         this.nombre = nombre
//         this.edad = edad
//         this.cedula = cedula
//     }


// }


// class Abogado {

//     constructor(nombre, edad, cedula, experiencia) {

//         this.experiencia = experiencia
//         this.nombre = nombre
//         this.edad = edad
//         this.cedula = cedula
//     }


// }


// class Licenciado {

//     constructor(nombre, edad, cedula, experiencia) {

//         this.experiencia = experiencia
//         this.nombre = nombre
//         this.edad = edad
//         this.cedula = cedula
//     }

// }


// class Enfermero {

//     constructor(nombre, edad, cedula, experiencia) {

//         this.experiencia = experiencia
//         this.nombre = nombre
//         this.edad = edad
//         this.cedula = cedula
//     }

// }

const Martha = new Dentista("Martha", 34, 132224, 10)

// console.log(typeof(Martha))
// console.log(Martha)
// Martha.saludo()