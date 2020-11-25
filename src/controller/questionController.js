const Question = require('../model/Question');

function getAll(req, res) {
  Question.find()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => res.status(400).json(err));
}

module.exports = {
  getAll
};
