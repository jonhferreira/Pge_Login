const express = require('express');
const router = express.Router();

const db = require('./../db');
const Acess_levels = require('../models/acess_levels');

router.post('/', (req, res) => {

    const newAcess_level = Acess_levels.create({
        level: req.body.level,
        description: req.body.description
    });

    res.status(200).send({
        msg: "Novo nível adicionado com sucesso"
    });

});

module.exports = router;