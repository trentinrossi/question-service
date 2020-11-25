const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionOptionSchema = new Schema({
  sequence: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    min: 1,
    max: 100,
    required: true,
  },
});

module.exports = mongoose.model('QuestionOption', questionOptionSchema);
