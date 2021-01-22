const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/questionController');

router.get('/', QuestionController.getAll);
router.get('/:id', QuestionController.getById);
router.post('/', QuestionController.insert);
router.patch('/:id', QuestionController.update);
router.delete('/:id', QuestionController.remove);

module.exports = router;
