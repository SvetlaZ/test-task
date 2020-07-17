const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
  id: Number,
  src: String,
  name: String,
  sex: String,
  weight: String,
  height: String,
  color: String,
  dieta: String,
  character: String,
});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = {
  Giraffe
};
