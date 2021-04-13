

let paises = ["Alemania", "Venezuela", "España", "Colombia" ]
                //0         1           2           3

//console.log(paises[3]);

// for( let i = 0 ; i < paises.length ; i ++){
//     console.log(paises[i]);
// }

let paises1 = [
    {
        nombre: "Alemania",
        ingles: "Germany" ,
        chino:{
            ingles: "Ejemplo dentro de chino"
        }
    }, //0
    {
        nombre: "Venezuela",
        ingles: "Venezuela" ,
        chino:{
            ingles: "Ejemplo dentro de chino"
        }
    }, //1
    {
        nombre: "España",
        ingles: "Spain" ,
        chino:{
            ingles: "Ejemplo dentro de chino"
        }
    }, //2
    {
        nombre: "Colombia",
        ingles: "Colombia",
        chino:{
            ingles: "Ejemplo dentro de chino"
        }
    } //3
]

for( let i = 0 ; i < paises1.length ; i ++){
    console.log(paises1[i].chino.ingles);
    console.log(paises1[i].ingles + " " + paises1[i].nombre);
}

