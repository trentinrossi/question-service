const express = require('express');
const router = express.Router();
const SubjectController = require('../controller/subjectController');

router.get('/', SubjectController.getAll);
router.get('/:id', SubjectController.getById);
router.post('/', SubjectController.insert);
router.patch('/:id', SubjectController.update);
router.delete('/:id', SubjectController.remove);

module.exports = router;
