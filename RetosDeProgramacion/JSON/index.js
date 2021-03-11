
const lista = document.querySelector(".contenido")

const arreglo = [1,2,3,4]

for(let i = 0 ; i < arreglo.length ; i++){
    lista.innerHTML += "<li>"+ arreglo[i] + "</li>"
}
