const Category = require('../model/Category');

function getAll(req, res) {
  Category.find()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => res.status(400).json(err));
}

function getById(req, res) {
  Category.findOne({ _id: req.params.id }).then((result) => {
    if (result === null) {
      res.status(400).json({ error: 'Category not found' });
    } else {
      res.status(200).json(result);
    }
  });
}

function insert(req, res) {
  Category.findOne({ name: req.body.name }).then((result) => {
    if (result === null) {
      const categoryData = ({ name } = req.body);

      const category = new Category(categoryData);

      category
        .save()
        .then((resp) => res.status(201).json(resp))
        .catch((err) =>
          res.status(400).json({ error: `Error to insert category: ${err}` })
        );
    } else {
      res.status(400).json({ error: 'Category already exists' });
    }
  });
}

function update(req, res) {
  Category.findOne({ _id: req.params.id }).then((result) => {
    if (result === null) {
      res.status(400).json({ error: 'Category not found' });
    } else {
      Category.updateOne({ _id: req.params.id }, { $set: req.body })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err));
    }
  });
}

//collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead
function remove(req, res) {
  Category.findOne({ _id: req.params.id }).then((result) => {
    if (result === null) {
      res.status(400).json({ error: 'Category not found' });
    } else {
      Category.remove({ _id: req.params.id })
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
