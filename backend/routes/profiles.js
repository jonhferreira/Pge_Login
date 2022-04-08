const express = require('express');
const router = express.Router();
const profilesControllers = require('../controllers/profiles')

router.post('/', profilesControllers.postProfile);
router.get('/:id_user', profilesControllers.getProfile);
router.get('/all', profilesControllers.getAllProfile);


module.exports = router;