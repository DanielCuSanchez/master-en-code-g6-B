// Las clases deben tener una sola responsabilidad

class Vehiculo {
  // lógica de negocio
  constructor(numRuedas, maxVelocidad){
    this.numRuedas = numRuedas
    this.maxVelocidad = maxVelocidad
  }

}

// lógica de presentación
class MuestraVehiculo {
  imprimir(vehiculo){
    console.log(`Número de ruedas: ${vehiculo.numRuedas} \nVelocidad máxima: ${vehiculo.maxVelocidad}`);
  }
}

const tsuru = new Vehiculo(4, '120km')

const impresora = new MuestraVehiculo()

impresora.imprimir(tsuru)