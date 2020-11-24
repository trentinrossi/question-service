const express = require('express');
const router = express.Router();
const CategoryController = require('../controller/categoryController');

router.get('/', CategoryController.getAll);

router.get('/:id', CategoryController.getById);

router.post('/', CategoryController.insert);

router.patch('/:id', CategoryController.update);

router.delete('/:id', CategoryController.remove);

module.exports = router;
