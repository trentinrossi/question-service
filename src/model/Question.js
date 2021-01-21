const mongoose = require('mongoose');
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
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    require: true,
  },
  mandatory: Boolean,
  options: [
    {
      type: Schema.Types.ObjectId,
      ref: 'QuestionOption',
      require: true,
    },
  ],
}, { versionKey: false });

module.exports = mongoose.model('Question', questionSchema);
