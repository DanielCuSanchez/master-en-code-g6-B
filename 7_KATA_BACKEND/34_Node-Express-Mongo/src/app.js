import express from 'express';
import db from './models';
const { Movie } = require('./models/Movie')

//Inicializando DB
db().then(() => console.log('Conectado a la db'))
  .catch(err => console.log(err));

const app = express();

app.use(express.json());

app.get('/', (req, res )=> {
  res.send('Hola!')
})

app.post('/movie', async (req, res)=>{
  // {name: 'La gran estafa', actors: [{...}]}
  const movie = req.body;
  console.log({movie});
  let newMovie = new Movie(movie);
  try{
    newMovie = await newMovie.save();
  }catch(error){
    console.error(error);
    return res.json(error);
  }
  res.json(newMovie);
})

app.post('/actor', (req, res)=>{
  //Implementar lógica para dar de alta un actor
})

export default app;
