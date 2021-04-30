const personita = {
  nombre: "Dany",
  edad: 26,
  ocupacion: "Developer",
  estudios: "Prepa",
  trabajo: {
    nombre: "Dev.F",
    ciudad: "CDMX"
  }
}

let persona2 = JSON.parse(JSON.stringify(personita))

personita.trabajo.ciudad = "BOGOTÁ"

console.log(personita);
console.log(persona2);