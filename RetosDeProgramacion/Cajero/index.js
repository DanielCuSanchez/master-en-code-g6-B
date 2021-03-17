//Base datos
const cuentasUsuario = [
  { nombre: "Mali", saldo: 200, password: "pruebita1" },//0
  { nombre: "Gera", saldo: 290, password: "pruebita2" },//1
  { nombre: "Maui", saldo: 67, password: "pruebita3" }//2
]

const contenedorInfoUsuario = document.getElementById("contenedorInfoUsuario")
const inputUsuario = document.getElementById("inputUsuario").value
const inputPassword = document.getElementById("inputPassword").value
const botonValidarLogin = document.getElementById("botonValidarLogin")


botonValidarLogin.addEventListener("click",validarLogin)

console.log(botonValidarLogin.addEventListener("click",validarLogin))


function validarLogin(){
  console.log("Entre");
  console.log(inputUsuario)
  console.log(inputPassword)
  for (let contador = 0; contador < cuentasUsuario.length; contador++) {
    if(inputUsuario === cuentasUsuario[contador].nombre &&  inputPassword === cuentasUsuario[contador].password ){
      alert("Logueado")
      return true
    }
  }
  return false
}

//console.log(validarLogin())