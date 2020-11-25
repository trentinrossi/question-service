const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/questionController');

router.get('/', QuestionController.getAll);

// router.get('/:id', CategoryController.getById);

// router.post('/', CategoryController.insert);

// router.patch('/:id', CategoryController.update);

// router.delete('/:id', CategoryController.remove);

module.exports = router;
