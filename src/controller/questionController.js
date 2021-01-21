const Question = require('../model/Question');
const Subject = require('../model/Subject');

function getAll(req, res) {
  Question.find()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => res.status(400).json(err));
}

function insert(req, res) {
  console.log(req.body);

  const { subjectId } = req.body;
  console.log(subjectId);
  Subject.findById(subjectId).then((subject) => {
    console.log(subject);
  });
  // Question.findOne({ title: req.body.title }).then((result) => {
  //   if (result === null) {
  //     const questionData = ({
  //       title,
  //       answerType,
  //       subjectId,
  //       mandatory,
  //       options,
  //     } = req.body);

  //     const question = new Question(questionData);

  //     question
  //       .save()
  //       .then((resp) => res.status(201).json(resp))
  //       .catch((err) =>
  //         res.status(400).json({ error: `Error to insert question: ${err}` })
  //       );
  //   } else {
  //     res.status(400).json({ error: 'Question already exists' });
  //   }
  // });
}

module.exports = {
  getAll,
  insert,
};
