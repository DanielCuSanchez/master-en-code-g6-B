
//Condicionales
// 1 verdadero y 0 falso
var bandera = 1

// if(bandera){
//     console.log('Si se cumplio la bandera')
// }


//Ciclos


var number1 = parseFloat (prompt ("Ingrese el primer número")); //1

var number2 = parseFloat (prompt ("Ingrese el segundo número"));//0

var number3 = parseFloat (prompt ("Ingrese el tercer número"));//3


var answer = number1 + number2 + number3;

if(number1 === number2 && number1 === number3){
    alert("Iguales")
}
else if ( number1 > number2 && number1 > number3) {
 // imprime numero uno mas grande
 alert("Number 1");
}else if (number2 > number3){
 // Imprime numero dos mas grande
 alert("Number 2");
}else{
 // imprime numero tres mas grande
 alert(" Number 3");
}

