const express = require('express');
const router = express.Router();
const levelsControllers = require('../controllers/acess_levels')
const login = require('../middleware/login')

router.post('/', login.advancedLevel, levelsControllers.postAcess_level);
router.get('/all', login.intermediaryLevel, levelsControllers.getAllAcess_level);
router.delete('/:level', login.advancedLevel, levelsControllers.deleteAcess_level);

module.exports = router;