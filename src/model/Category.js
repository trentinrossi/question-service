const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    min: 3,
    max: 100,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('Category', categorySchema);
