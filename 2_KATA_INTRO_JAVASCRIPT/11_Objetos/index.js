
// let ayudanteDeSanta = {
//     raza: "Galgo",
//     color: "cafe",
//     edad: 20,
//     ladrar: function(){
//         console.log("Estoy ladrando!!!")
//     },
//     jugar: function(){
//         console.log("Estoy moviendo la colita :v")
//     }
// }


// console.log("Hola soy "+ayudanteDeSanta.raza + " y tengo "+ayudanteDeSanta.edad+ " años")

// ayudanteDeSanta.ladrar()
// ayudanteDeSanta.jugar()
// ayudanteDeSanta.jugar()
// ayudanteDeSanta.jugar()

// function log (parametro){
//     output( parametro)
// }


const casa = {
    numeroPisos: 2,
    numeroBanos: 2,
    jardinGrande: true,
    precio: 3000,
    coordendas: {
        x: "123",
        y: "334"
    },
    dueno:{
        nombre: "Juan",
        apellidoPaterno: "Perez"
    },
    setPrecio: function(precio){
        this.precio = precio
    },
    setNumeroPisos: function(precio){
        this.precio = precio
    }
}


casa.dueno.apellidoMaterno = "Sanchez"

console.log(casa.dueno.nombre + " " + casa.dueno.apellidoPaterno + " " + casa.dueno.apellidoMaterno)

console.log(casa.dueno)



//casa.set(4000)

//console.log(casa.precio);

const macbook = {
    modelo: "MAC",
    cantidad: 12,
    precio: 4500
}

const tienda = {
    productos:[
        macbook,
        macbook,
        {
            modelo: "IPHONE",
            cantidad: 12,
            precio: 8500
        },
        {
            modelo: "",
            cantidad: 12,
            precio: 8500
        },
        {
            modelo: "IPHONE",
            cantidad: 12,
            precio: 8500
        }
        ,{
            modelo: "IPHONE",
            cantidad: 12,
            precio: 8500,
        },
        macbook,
        macbook,
    ],
    obtenerSuma: function(){
        let totalSuma = 0
        for(let i = 0 ;  i < tienda.productos.length ; i++){
            totalSuma += tienda.productos[i].precio
        }
        //tieda.productos[0].precio
        //tieda.productos[1].precio
        console.log(totalSuma);
    }
}

tienda.obtenerSuma()




