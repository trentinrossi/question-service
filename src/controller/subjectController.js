const Subject = require('../model/Subject');
const Category = require('../model/Category');

function getAll(req, res) {
  Subject.find()
    .populate('category', '_id name')
    .then((resp) => {
      console.log(resp);
      res.status(200).json(resp);
    })
    .catch((err) => res.status(400).json(err));
}

function getById(req, res) {
  Subject.findById({ _id: req.params.id })
    .populate('category', '_id name')
    .then((result) => {
      if (result === null) {
        res.status(400).json({ error: 'Subject not found' });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => res.status(500).json(err));
}

function insert(req, res) {
  const { name, categoryId } = req.body;

  Category.findById(categoryId).then((category) => {
    if (category) {
      const subject = new Subject({ name, category });
      subject.save().then((resp) => res.status(201).json(resp));
    } else {
      res.status(400).json(`Category: ${categoryId} not found`);
    }
  });
}

function update(req, res) {
  Subject.findOne({ _id: req.params.id }).then((result) => {
    if (result === null) {
      res.status(400).json({ error: 'Subject not found' });
    } else {
      Subject.updateOne({ _id: req.params.id }, { $set: req.body })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err));
    }
  });
}

//collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead
function remove(req, res) {
  Subject.findOne({ _id: req.params.id }).then((result) => {
    if (result === null) {
      res.status(400).json({ error: 'Subject not found' });
    } else {
      Subject.remove({ _id: req.params.id })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err));
    }
  });
}

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove,
};
