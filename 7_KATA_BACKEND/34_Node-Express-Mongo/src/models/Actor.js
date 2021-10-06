const { Schema, model } = require('mongoose');

const actorSchema = new Schema({
  name: { type: String, required: true },
  bio: String,
  biopic: String,
  birthdate: Date,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const Actor = model('Actor', actorSchema);

module.exports = { Actor }