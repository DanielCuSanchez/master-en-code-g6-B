const { Schema, model }= require('mongoose');

const movieSchema = new Schema({
  name: {type: String, required: true},
  cover_image: String,
  year: String,
  genres: Array,
  director: String,
  duration: Number,
  actors: [{name: String, birthdate: Date, biopic: String}],
  rating: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const Movie = model('Movie', movieSchema);

module.exports = { Movie }