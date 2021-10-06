import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
  name: {type: String, required: true},
  cover_image: String,
  year: String,
  genres: Array,
  director: String,
  duration: Number,
  actors: [{type: Schema.Types.ObjectId, ref: 'Actor'}],
  rating: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export const Movie = model('Movie', movieSchema);
