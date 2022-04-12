const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users')
const login = require('../middleware/login')

router.post('/users/login', usersControllers.postLogin);
router.post('/users/register', usersControllers.registerUser);
router.get('/users/verifyToken', login.tokenVerify, usersControllers.checkToken)
router.patch('/users/modify_pass', usersControllers.updateUser);
router.delete('/users/:id_user', usersControllers.deleteUser);
module.exports = router;