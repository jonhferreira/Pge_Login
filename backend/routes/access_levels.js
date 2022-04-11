const express = require('express');
const router = express.Router();
const levelsControllers = require('../controllers/access_levels')
const login = require('../middleware/login')

router.post('/', login.advancedLevel, levelsControllers.postAccess_level);
router.get('/all', login.intermediaryLevel, levelsControllers.getAllAccess_level);
router.delete('/:level', login.advancedLevel, levelsControllers.deleteAccess_level);

module.exports = router;