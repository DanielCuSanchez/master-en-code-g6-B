import app from "./app";
require("dotenv").config();

async function main() {
  console.log(process.env.HOLA);
  await app.listen(3000);
  console.log("http://localhost:3000/");
}

main();
