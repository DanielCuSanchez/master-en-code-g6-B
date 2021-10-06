import { Actor } from '../models/Actor';
import { Movie } from '../models/Movie';

export async function deleteOneMovie(req, res) {
  const { idMovie } = req.params;
  try{
    const result =  await Movie.findOneAndRemove({_id: idMovie });
    res.json(result);
  }catch(err){
    res.json({message: err.message});
  }
}

export async function getOneMovie(req, res) {
  const {idMovie} = req.params;
  try{
    const movie = await Movie.findById(idMovie).populate('actors')
    return res.json(movie);
  }catch(error){ 
    return res.status(400).json({message: error.message})
  }
}

export async function getMovie(req, res) {
  try{
    const movies = await Movie.find({});
    res.json(movies)
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export async function postMovie(req, res) {
  const movie = req.body;
  let newMovie = new Movie(movie);
  try {
    newMovie = await newMovie.save();
  } catch (error) {
    console.error(error.message);
    if (error.name === 'ValidationError'){
      return res.status(400).json({message: error.message});
    }
    return res.status(500).json({ message: error.message });
  }
  res.json(newMovie);
}

export async function updateOneMovie(req, res) {
  try {
    const { idMovie } = req.params;
    const body = req.body;
    let update = body;
    if(body.actors){
      const actors = [...body.actors];
      delete body.actors;
      update = {...body, $addToSet: {actors}};
    }
    const movie = await Movie.findByIdAndUpdate(idMovie, update, {new: true});
    return res.json(movie);
  } catch (error) {
    console.error(error);
    return res.status(400).json({message: error.message});
  }
}
