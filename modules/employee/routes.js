const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');

const { getAll, remove, create, update } = require('./controllers');

router.get('/', getAll);

router.delete('/:id', remove);

router.post('/', upload.single('image'), create);

router.patch('/:id', upload.single('image'), update);

module.exports = router;