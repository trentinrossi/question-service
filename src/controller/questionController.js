const Question = require('../model/Question');
const Subject = require('../model/Subject');

function getAll(req, res) {
  Question.find()
    .populate('subject', '_id, name')
    .populate('options', '_id', 'sequence', 'description')
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => res.status(400).json(err));
}

function getById(req, res) {
  Question.findById({ _id: req.params.id })
    .populate('subject', '_id, name')
    .populate('options', '_id', 'sequence', 'description')
    .then((result) => {
      if (result === null) {
        res.status(400).json({ error: 'Question not found' });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => res.status(500).json(err));
}

// Validar para que as sequencias das options não sejam iguais
function insert(req, res) {
  const { answerType, options, title, mandatory, subjectId } = req.body;

  const question = new Question({ answerType, options, title, mandatory });

  Subject.findById(subjectId).then((subject) => {
    if (subject) {
      question.subject = subject;

      question.save().then((resp) => res.status(201).json(resp));
    } else {
      res.status(400).json(`Subject: ${subjectId} not found`);
    }
  });
}

function update(req, res) {
  Question.findOne({ _id: req.params.id }).then((result) => {
    if (result === null) {
      res.status(400).json({ error: 'Question not found' });
    } else {
      Question.updateOne({ _id: req.params.id }, { $set: req.body })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err));
    }
  });
}

//collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead
function remove(req, res) {
  Question.findOne({ _id: req.params.id }).then((result) => {
    if (result === null) {
      res.status(400).json({ error: 'Question not found' });
    } else {
      Question.remove({ _id: req.params.id })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err));
    }
  });
}

module.exports = {
  getAll,
  insert,
  getById,
  update,
  remove
};
