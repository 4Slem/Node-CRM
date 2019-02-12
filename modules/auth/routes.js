const express = require('express');
const router = express.Router();
const register = require('./controllers/reginster');
const login = require('./controllers/login');

router.post('/login', login);
router.post('/register', register);

module.exports = router;