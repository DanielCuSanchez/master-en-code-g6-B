const boton = document.getElementById('boton')
const parrafo = document.getElementById('parrafo')
const botonCambiar = document.getElementById('cambiar')

console.log('El html dentro del parrafo es:',parrafo.innerHTML)

var cambiarParrafo = function (e){
  console.log(e);
  parrafo.innerHTML =  'Hola, el parrafo se ha modificado'
}

function cambiarEstilos(){
  parrafo.classList.add('darks')
  cambiarLista()
}

boton.addEventListener('click', cambiarParrafo)

botonCambiar.addEventListener("click", cambiarEstilos)

function cambiarLista(){
  const elementosLista = document.querySelectorAll('li')
  
  for (let i = 0; i < elementosLista.length; i++) {
    const element = elementosLista[i]
    element.classList.add('darks')
  }
  
}


function cambiarImagen(){
  const imagen = document.getElementById('imagen')
  imagen.src = 'gow2.jpg'
}