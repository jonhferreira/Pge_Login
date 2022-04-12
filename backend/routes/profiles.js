const express = require('express');
const router = express.Router();
const profilesControllers = require('../controllers/profiles');
const login = require('../middleware/login');

router.post('/profiles/', profilesControllers.postProfile);
router.get('/profiles/all', login.advancedLevel, profilesControllers.getAllProfile);
router.get('/profiles/:id_user', profilesControllers.getProfile);
router.delete('/profiles/:id_user', profilesControllers.deleteProfile);
router.patch('/profiles/update', login.basicLevel, profilesControllers.updateProfile);

module.exports = router;