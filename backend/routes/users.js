const express = require('express');
const bcryptjs = require('bcryptjs');

const router = express.Router();

const db = require('./../db')
const Users = require('./../models/users')


router.get('/:email', async (req, res) => {
    const user_email = req.params.email;

    const user = await Users.findOne({
        where: {
            email: user_email
        }
    });
    res.status(200).send(user);
})


router.post('/', (req, res) => {

    bcryptjs.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).send({ error: err })
        }

        const newUser = Users.create({
            email: req.body.email,
            password: hash
        });

        res.status(200).send({ msg: "Usuário cadastrado" });

    })




});

module.exports = router;