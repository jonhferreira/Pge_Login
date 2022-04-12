const express = require('express');
const router = express.Router();
const profilesControllers = require('../controllers/profiles');
const login = require('../middleware/login');

router.post('/', profilesControllers.postProfile);
router.get('/all', login.advancedLevel, profilesControllers.getAllProfile);
router.get('/:id_user', profilesControllers.getProfile);
router.delete('/:id_user', profilesControllers.deleteProfile);
router.patch('/update', login.basicLevel, profilesControllers.updateProfile);

module.exports = router;