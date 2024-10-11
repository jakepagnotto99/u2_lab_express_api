const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  runtime: { type: Number, required: true },
  rating: { type: Number, required: true },
  yearReleased: { type: Number, required: true },
  description: { type: String },
  posterImage: { type: String }  // URL to the poster image
});

module.exports = mongoose.model('Movie', movieSchema);
