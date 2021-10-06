import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


import db from './models';
import actorRoutes from './routes/actor.routes';
import movieRoutes from './routes/movie.routes';

//Inicializando DB
db().then(() => console.log('Conectado a la db'))
  .catch(err => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res )=> {
  res.send('Hola!')
})

app.use('/movie', movieRoutes);
app.use('/actor', actorRoutes);


export default app;
