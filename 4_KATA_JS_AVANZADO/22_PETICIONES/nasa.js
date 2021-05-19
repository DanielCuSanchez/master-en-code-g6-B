const request = require("request");
const urlBase = "https://api.nasa.gov/neo/rest/v1/feed?api_key=";
const api_key = "a1p8AEBdqkN7oV2Vg6vlUvk4Tz7WGrVwft4PX6ht";

var start_date = "",
  end_date = "",
  url = urlBase + api_key,
  asteroidsList = [],
  //Aqui se guardan los asteroides peligrosos
  hazardousAsteroids = [];
function getHazardousAsteroids(start_date, end_date) {
  //Establecemos el URL a consultar
  const URL_FINAL = url + "&start_date=" + start_date + "&end_date=" + end_date;
  console.log(URL_FINAL);

  //Inicio del request
  request.get(URL_FINAL, (error, response, body) => {
    info = JSON.parse(body);
    const asteroids = info.near_earth_objects;
    for (date in asteroids) {
      asteroidsList = asteroids[date];
      for (let i = 0; i < asteroidsList.length; i++) {
        const asteroid = asteroidsList[i];
        if (asteroid["is_potentially_hazardous_asteroid"]) {
          hazardousAsteroids.push(asteroid);
        }
      }
    }

    //Darle formato de respueta

    //Validamos si hay asteroides
    if (hazardousAsteroids.length > 0) {
      console.log(
        `Se encontraron ${hazardousAsteroids.length} asteroides peligrosos: \n`
      );
      //Iteramos sobre el arreglo cada asteroide
      hazardousAsteroids.forEach(function (asteroid) {
        console.log("Nombre:", asteroid.name);
        console.log(
          `Diametro estimado: ${
            (asteroid["estimated_diameter"]["kilometers"][
              "estimated_diameter_min"
            ] +
              asteroid["estimated_diameter"]["kilometers"][
                "estimated_diameter_max"
              ]) /
            2
          }km \n`
        );
      });
    } else {
      console.log("No hay asteroides peligrosos en las fechas consultadas");
    }
  });
}
getHazardousAsteroids("2021-05-01", "2021-05-07");
