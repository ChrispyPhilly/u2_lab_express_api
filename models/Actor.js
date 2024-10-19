const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  alive: { type: Boolean, required: true },
  image: { type: String }, // URL to the image
});

module.exports = mongoose.model('Actor', actorSchema);