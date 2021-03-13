// Escribe un programa que utilice console.logpara imprimir todos los números del 1 al 100, con dos excepciones. Para números divisibles por 3, imprima en "Fizz"lugar del número, y para números divisibles por 5 (y no 3), imprima en su "Buzz"lugar.
// Cuando tenga eso funcionando, modifique su programa para que imprima "FizzBuzz"números que sean divisibles por 3 y 5 (y aún imprima "Fizz"o "Buzz"para números divisibles por solo uno de esos).
// (Esta es en realidad una pregunta de la entrevista que se ha afirmado que elimina un porcentaje significativo de candidatos a programadores. Por lo tanto, si lo resolvió, su valor en el mercado laboral simplemente subió).

for (let contador = 1; contador <= 100; contador++) {
    if( (contador % 3 === 0 ) && (contador % 5 === 0 )){
        console.log(contador+" FizzBuzz")
    }else if( contador % 3 === 0){
        console.log(contador+" Fizz")
    }else if( contador % 5 === 0){
        console.log(contador+" Buzz")
    }else{
        console.log(contador)
    }
}

