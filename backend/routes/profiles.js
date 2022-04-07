const express = require('express');
const router = express.Router();

const db = require('./../db');
const Profiles = require('./../models/profiles');

router.post('/', (req, res) => {

    const newProfile = Profiles.create({
        name: req.body.name,
        last_name: req.body.last_name,
        birth_data: req.body.birth_data,
        user: req.body.user,
        acess_level: req.body.acess_level
    });

    res.status(200).send({
        msg: "Perfil foi adicionado"
    });

});

module.exports = router;