const express = require('express');
const router = express.Router();
const { create, read, removeTodo } = require('../controller/index');

router.post('/todos/create', create);
router.get('/todos', read);
router.delete('/todos/:id', removeTodo);

module.exports = router;
