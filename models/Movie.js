const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  runtime: { type: Number, required: true },
  rating: { type: Number, min: 1, max: 10, required: true },
  yearReleased: { type: Number, required: true },
  description: { type: String, required: true },
  posterImage: { type: String }, // URL to the image
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Movie', movieSchema);