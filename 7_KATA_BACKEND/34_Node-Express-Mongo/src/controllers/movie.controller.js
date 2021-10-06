export function deleteOneMovie(req, res) {
  res.json({})
}

export function getOneMovie(req, res) {
  res.json({})
}

export async function getMovie(req, res) {
  res.json({})
}

export async function postMovie(req, res) {
  const movie = req.body;
  let newMovie = new Movie(movie);
  try {
    newMovie = await newMovie.save();
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
  res.json(newMovie);
}

export function updateOneMovie(req, res) {
  res.json({})
}
