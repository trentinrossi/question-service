const mongoose = require('mongoose');
const Subject = require('./Subject');
const { Schema } = mongoose;

const questionSchema = new Schema({
  title: {
    type: String,
    min: 3,
    max: 255,
    mandatory: true,
  },
  answerType: {
    type: String,
    enum: ['NPS', 'TEXT', 'CHECKBOX', 'RADIO'],
    default: 'TEXT',
  },
  subject: {
    type: Subject,
    require: true,
  },
  mandatory: Boolean,
  options: [
    {
      sequence: {
        type: Number,
        require: true,
      },
      description: {
        type: String,
        min: 1,
        max: 100,
      },
    },
  ],
});

module.exports = mongoose.model('Question', questionSchema);
