//Base datos
const cuentasUsuario = [
  { nombre: "Mali", saldo: 200, password: "pruebita1" },//0
  { nombre: "Gera", saldo: 290, password: "pruebita2" },//1
  { nombre: "Maui", saldo: 67, password: "pruebita3" }//2
]

const contenedorInfoUsuario = document.getElementById("contenedorInfoUsuario")
const botonValidarLogin = document.getElementById("botonValidarLogin")
const inputUsuario = document.getElementById("inputUsuario")
const inputPassword = document.getElementById("inputPassword")

//Eventos
botonValidarLogin.addEventListener("click",inicioDePrograma)

//Loop de programa

function inicioDePrograma(){
  if(validarLogin()){
    ocultarElementos([inputUsuario, inputPassword, botonValidarLogin])
  }else{
    contenedorInfoUsuario.style.display = "block"
    contenedorInfoUsuario.innerHTML = "Credenciales incorrectas"
    setTimeout(function(){
      contenedorInfoUsuario.style.display = "none"
      contenedorInfoUsuario.innerHTML = ""
      
    },1000)
  }
}

//Funciones

function ocultarElementos(elementos){
  for (let contador = 0; contador < elementos.length; contador++) {
    elementos[contador].style.display="none"
  }
}


function mostrarElementos(elementos){
  for (let contador = 0; contador < elementos.length; contador++) {
    elementos[contador].style.display="block"
  }
}


function validarLogin(){
  for (let contador = 0; contador < cuentasUsuario.length; contador++) {
    if(inputUsuario.value === cuentasUsuario[contador].nombre &&  inputPassword.value === cuentasUsuario[contador].password ){
      alert("Logueado")
      return true
    }
  }
  contenedorInfoUsuario.innerHTML = "Credenciales incorrectas"
  return false
}

//console.log(validarLogin())

