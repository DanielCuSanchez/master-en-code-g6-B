//Colocar el arreglador

const cuentas = [
  { nombre: "Mali", saldo: 200, password: "pruebita1" },//0
  { nombre: "Gera", saldo: 290, password: "pruebita2" },//1
  { nombre: "Maui", saldo: 67, password: "pruebita3" }//2
]

//ingresar desde el prompt usuario y password


// for(let i = 0 ; i < cuentas.length ; i++){
//     console.log(cuentas[i].nombre);
// }


//hacer un if comparlo dentro de un ciclo


//cajero.validarIdentidad(usuario, password)

//tener el objeto cajero

const cajero = {
    saldo : 100,
    usuario : "",
    ingresarUsuario: function(usuarioLoggeado){
        this.usuario = usuarioLoggeado
    },

    validarIdentidad: function(usuario, password){
        
    },

    retirarDinero: function(cantidad){
        return this.saldo - cantidad
    },
    consultarSaldo: function(){
        return saldo
    },
    depositar: function(cantidad){

        return saldo
    }
}
//Metodos consultar saldo, retirar y depositar $

//cajero.ingresarUsuario()

// while(respuesta != 4){
//     let respuesta = prompt("1) saldo, 2) retirar, 3) depositar 4) salir")

//     if(respuesta == 1){
//         cajero.consultarSaldo()
//     }
//     else if(respuesta == 2){
//         let cantidad = prompt("ingresa cuanto quieres retirar")
//         cajero.retirarDinero(cantidad)
//     }
//     else if(respuesta == 3){
//         let cantidad = prompt("ingresa cuanto quieres retirar")
//         cajero.depositar(cantidad)
//     }
// }

console.log(Object.keys(cajero));