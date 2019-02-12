const express = require('express');
const router = express.Router();
const { getAll, remove, create, update } = require('./controllers');

router.get('/', getAll);

router.delete('/:id', remove);

router.post('/', create);

router.patch('/:id', update);

module.exports = router;