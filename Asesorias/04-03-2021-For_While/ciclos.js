console.log("Hola mundo")

//FOR

// for(var i = 1 ; i <= 100 ; i++ ){

//     if(i % 2 == 0 ){
//         console.log("SOY PAR",i)
//     }

// }


// 20 / 2 = 10  Residuo = 0
// 21 / 2 = 10  Residuo = 1


// 1+2+3+4+5+6+......99+100
var suma = 0
for(var contador = 1 ; contador <= 100 ; contador++ ){
            //0       //1
    suma  = suma  + contador;

    //console.log("Suma hasta el momento",suma,"#",contador)
    // 1 = 1 + 2
    // 3 = 3 + 3
}
//console.log(suma)

var pais = ['Mexico', 'España', 'Argentina', 'Chile', 'Colombia', 'Venezuela', 'Perú', 'Costa Rica']

var i = 0
while(i < pais.length){
    console.log(pais[i])
    i++
}
