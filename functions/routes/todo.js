const express = require('express');
const router = express.Router();
const { create, read, removeTodo } = require('../controller/index');

router.post('/todos/create', create);
router.get('/todos', read);
router.delete('/todos/:id', removeTodo);

//netlify test route
router.get('/', (res) => {
    res.status(200).send('This is working.');
})

module.exports = router;
