const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users')


router.post('/login', usersControllers.postLogin);
router.post('/register', usersControllers.registerUser);

module.exports = router;