const express = require('express');
const router = express.Router();
const levelsControllers = require('../controllers/access_levels')
const login = require('../middleware/login')

router.post('/access_level/', login.advancedLevel, levelsControllers.postAccess_level);
router.get('/access_level/all', login.intermediaryLevel, levelsControllers.getAllAccess_level);
router.delete('/access_level/:level', login.advancedLevel, levelsControllers.deleteAccess_level);

module.exports = router;