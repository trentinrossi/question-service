const mongoose = require('mongoose');
const Category = require('./Category');
const { Schema } = mongoose;

const subjectSchema = new Schema({
  name: {
    type: String,
    min: 3,
    max: 255,
    required: true,
  },
  category: {
    type: Category,
    required: true,
  },
});

module.exports = mongoose.model('Subject', subjectSchema);
