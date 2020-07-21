const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
  name: {
    type: String,
    default: 'Имя',
  },
  sex: {
    type: String,
    default: '-',
  },
  weight: {
    type: String,
    default: '-',
  },
  height: {
    type: String,
    default: '-',
  },
  color: {
    type: String,
    default: '',
  },
  dieta: {
    type: String,
    default: '',
  },
  character: {
    type: String,
    default: '',
  },
});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = {
  Giraffe
};
