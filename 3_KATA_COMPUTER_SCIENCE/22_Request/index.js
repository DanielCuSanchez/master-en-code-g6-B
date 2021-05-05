const request = require("request");

//console.log(request);
console.time();
request.get("https://swapi.dev/api/people/1/", (err, res, body) => {
  console.log(JSON.parse(res.body).name);
  console.timeEnd();
});
console.log("fin");

// console.timeEnd();
