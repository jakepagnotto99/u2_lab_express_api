const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  alive: { type: Boolean, default: true },
  profileImage: { type: String }
});

module.exports = mongoose.model('Actor', actorSchema);
