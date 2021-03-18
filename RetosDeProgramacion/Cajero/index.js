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

function inicioDeSesion(){
  ocultarElementos([inputUsuario, inputPassword, botonValidarLogin])
  mostrarElementos([menuCajero,botonCerrarSesion, contenedorInfoUsuario])

  botonConsultarSaldo.addEventListener("click",consultarSaldo)

}

//Opciones de menu

function consultarSaldo(){
  contenedorInfoUsuario.innerHTML = cuentasUsuario[positionExtraida].saldo
}


//Funciones auxiliares

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
  for (let contador = 0; contador < cuentasUsuario.length; contador++) {
    if(inputUsuario.value === cuentasUsuario[contador].nombre &&  inputPassword.value === cuentasUsuario[contador].password ){
      alert("Logueado")
      return true
    }
  }
  return false
}

//console.log(validarLogin())

