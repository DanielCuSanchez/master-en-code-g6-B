import { Actor } from '../models/Actor';

export async function deleteOneActor(req, res) {
  const { idActor } = req.params;
  try {
    const result = await Actor.findOneAndRemove({ _id: idActor });
    res.json(result);
  } catch (err) {
    res.json({ message: err.message });
  }
}

export async function getOneActor(req, res) {
  const { idActor } = req.params;
  try {
    const actor = await Actor.findById(idActor)
    return res.json(actor);
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export async function getActor(req, res) {
  try {
    const actors = await Actor.find({});
    res.json(actors)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function postActor(req, res) {
  const actor = req.body;
  let newActor = new Actor(actor);
  try {
    newActor = await newActor.save();
  } catch (error) {
    console.error(error.message);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
  res.json(newActor);
}

export async function updateOneActor(req, res) {
  try {
    const { idActor } = req.params;
    const actor = await Actor.findByIdAndUpdate(idActor, idActor, { new: true });
    return res.json(actor);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
}
