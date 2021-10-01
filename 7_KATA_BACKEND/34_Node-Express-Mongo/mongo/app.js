const { MongoClient } = require("mongodb");
const actorsFile = require("./actors.json");
const moviesFile = require("./movies.json");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const DATABASE_NAME = "movie_store"
let db = {}

async function initMongo(){
  try{
    await client.connect();
    db = client.db(DATABASE_NAME);
    await createMovies();
  } catch(err){
    console.dir(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


async function createActors(){
  const actorsCollection = db.collection("actors");
  let resp = await actorsCollection.insertMany(actorsFile);
  console.log(resp);
}

async function createMovies(moviesObject = moviesFile) {
  const moviesCollection = db.collection("movies");
  const actorsCollection = db.collection("actors");

  const moviesProms = moviesObject.map(movie => {
    const actorsProms = movie.actors.map(async actor => {
      if(actor._id) {
        //buscarlo
        const act = await actorsCollection.findOne({name: actor.name})
        console.log('Actor encontrado', act);
        actor = act;
      }else {
        //crearlo
        const act = await actorsCollection.insertOne(actor)
        console.log('Actor registrado', act);
        actor = act;
      }
    });
    return Promise.all(actorsProms)
  })
  await Promise.allSettled(moviesProms);

  let resp = await moviesCollection.insertMany(moviesObject);
  console.log(resp);
}

// console.log(actorsFile);
initMongo()