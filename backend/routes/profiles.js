const express = require('express');
const router = express.Router();
const profilesControllers = require('../controllers/profiles');
const login = require('../middleware/login');

router.post('/', profilesControllers.postProfile);
router.get('/:id_user', profilesControllers.getProfile);
router.get('/all', profilesControllers.getAllProfile);
router.delete('/:id_user', profilesControllers.deleteProfile);
router.patch('/update', login.basicLevel, profilesControllers.updateProfile);
module.exports = router;