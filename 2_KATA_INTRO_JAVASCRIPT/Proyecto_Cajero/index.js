//Base datos
const cuentasUsuario = [
  { nombre: "Mali", saldo: 200, password: "pruebita1" },//0
  { nombre: "Gera", saldo: 290, password: "pruebita2" },//1
  { nombre: "Maui", saldo: 67, password: "pruebita3" }//2
]

//Seccion de login
const contenedorInfoUsuario = document.getElementById("contenedorInfoUsuario")
const botonValidarLogin = document.getElementById("botonValidarLogin")
const inputUsuario = document.getElementById("inputUsuario")
const inputPassword = document.getElementById("inputPassword")

//Eventos
botonValidarLogin.addEventListener("click",inicioDePrograma)

//Loop de programa

function inicioDePrograma(){
  if(validarLogin()){

    inicioDeSesion()

  }
  else
  {
    contenedorInfoUsuario.style.display = "block"
    contenedorInfoUsuario.innerHTML = "Credenciales incorrectas"

    setTimeout(function(){
      contenedorInfoUsuario.style.display = "none"
      contenedorInfoUsuario.innerHTML = ""
    },1000)
  }

}

//Funciones

//Inicio de sesion

const menuCajero = document.getElementById("menuCajero")
const botonConsultarSaldo = document.getElementById("botonConsultarSaldo")
const botonDepositar = document.getElementById("botonDepositar")
const botonRetirar = document.getElementById("botonRetirar")
const botonCerrarSesion = document.getElementById("botonCerrarSesion")
const nombreCliente = document.getElementById("nombreCliente")

function inicioDeSesion(){

  const posicionExtraida = extraerPosicion()

  nombreCliente.innerHTML = "Bienvenid@ " + cuentasUsuario[posicionExtraida].nombre
  contenedorInfoUsuario.innerHTML = "Selecciona una opción"

  ocultarElementos([inputUsuario, inputPassword, botonValidarLogin])
  mostrarElementos([menuCajero,botonCerrarSesion, contenedorInfoUsuario, nombreCliente])

  botonConsultarSaldo.addEventListener("click",consultarSaldo)
  botonDepositar.addEventListener("click", depositarAlaCuenta)
  botonRetirar.addEventListener("click",retirarDeLaCuenta)
  botonCerrarSesion.addEventListener("click",cerrarSesion)
}

//Opciones de menu
function consultarSaldo(){
  const posicionExtraida = extraerPosicion()
  contenedorInfoUsuario.innerHTML = "Saldo: $" + cuentasUsuario[posicionExtraida].saldo
}

function depositarAlaCuenta(){
  const inputDinero = parseInt(prompt("Ingresa el dinero"))
  if(inputDinero  > 0){
    //Consultamos la posicion
    const posicionExtraida = extraerPosicion()

    //Añaden dinero al usuario
    cuentasUsuario[posicionExtraida].saldo = cuentasUsuario[posicionExtraida].saldo + inputDinero
    //Mostramos el nuevo saldo en la caja de texto
    contenedorInfoUsuario.innerHTML = "Nuevo Saldo: $" + cuentasUsuario[posicionExtraida].saldo
  }else{
    contenedorInfoUsuario.innerHTML = "Ingresa saldo positivo"
    setTimeout(()=>{
      contenedorInfoUsuario.innerHTML = "Selecciona una opción"
    },3000)
  }
}

function retirarDeLaCuenta(){
  const posicionExtraida = extraerPosicion()
  const inputDinero = parseInt(prompt("Cantidad a retirar"))
  if( inputDinero < 0){
    contenedorInfoUsuario.innerHTML = "Ingresa mayor a 0"
    setTimeout(()=>{
      contenedorInfoUsuario.innerHTML = "Selecciona una opción"
    },3000)

    return
  }

  if( inputDinero > cuentasUsuario[posicionExtraida].saldo){
    contenedorInfoUsuario.innerHTML = "No tienes suficiente saldo"
    setTimeout(()=>{
      contenedorInfoUsuario.innerHTML = "Selecciona una opción"
    },3000)

    return
  }


  if(inputDinero <= cuentasUsuario[posicionExtraida].saldo){
    //Quitar dinero al usuario
    cuentasUsuario[posicionExtraida].saldo = cuentasUsuario[posicionExtraida].saldo - inputDinero
    //Mostramos el nuevo saldo en la caja de texto
    contenedorInfoUsuario.innerHTML = "Nuevo Saldo: $" + cuentasUsuario[posicionExtraida].saldo
    return
  }
}

//Cerrar Sesion

function cerrarSesion(){
  ocultarElementos([menuCajero,botonCerrarSesion, contenedorInfoUsuario, nombreCliente])
  mostrarElementos([inputUsuario, inputPassword, botonValidarLogin])
  inputUsuario.value = ""
  inputPassword.value = ""
}

//Funciones auxiliares

function extraerPosicion(){
  let posicionExtraida = null
  for (let contador = 0; contador < cuentasUsuario.length; contador++) {
    if(inputUsuario.value === cuentasUsuario[contador].nombre &&  inputPassword.value === cuentasUsuario[contador].password ){
      posicionExtraida = contador
    }
  }
  return posicionExtraida
}


function ocultarElementos(elementos){ //recibe un arreglo
  for (let contador = 0; contador < elementos.length; contador++) {
    elementos[contador].style.display="none"
  }
}


function mostrarElementos(elementos){
  for (let contador = 0; contador < elementos.length; contador++) {
    elementos[contador].style.display="block"
  }
}

//Login principal
function validarLogin(){
  if(extraerPosicion()!==null){
    return true
  }
  return false
}

//console.log(validarLogin())

