const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users')
const login = require('../middleware/login')

router.post('/login', usersControllers.postLogin);
router.post('/register', usersControllers.registerUser);
router.get('/verifyToken', login.tokenVerify, usersControllers.checkToken)
router.patch('/modify_pass', usersControllers.updateUser);
module.exports = router;