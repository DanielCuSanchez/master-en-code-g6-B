// Creando promesa que genera un numero random del 0 al 10
// y devuelve error si es < 5, sino, todo bien
const promesa = new Promise(function (resolve, reject) {
  const numero = Math.floor(Math.random() * 10);

  setTimeout(function () {
    if (numero >= 5) {
      resolve(numero);
    } else {
      reject(new Error("El numero fue " + numero + " menor que 5"));
    }
  }, 1000);
  console.log("Soy sincrono");
});

const promesaDiferente = new Promise(function (resolve, reject) {
  const numero = Math.floor(Math.random() * 10);

  setTimeout(function () {
    if (numero >= 5) {
      resolve(numero);
    } else {
      reject(new Error("El numero fue " + numero + " menor que 5"));
    }
  }, 1000);
});

// Utilizando promesa
promesa
  .then(function (respuesta) {
    console.log("SOY EL PRIMER THEN la respuesta es:", respuesta);
    return promesaDiferente;
  })
  .then(function (respuesta) {
    console.log("SOY EL SEGUNDO THEN la respuesta es:", respuesta);
  })
  .catch(function (error) {
    console.error(error);
  });

console.log("HOLI");
