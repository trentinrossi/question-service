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
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('Subject', subjectSchema);
