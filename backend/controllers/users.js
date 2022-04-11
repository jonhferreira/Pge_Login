const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./../models/users')


exports.postLogin = async (req, res) => {

    const req_user = req.body.user;
    const req_password = req.body.password;

    const user = await Users.findOne({
        where: {
            user: req_user
        }
    });

    bcryptjs.compare(req_password, user.password, (err, result) => {
        if (err) {
            return res.status(401).send({ mensagem: "Erro ao se autentificar" });
        }
        if (result) {
            const token = jwt.sign({
                id_user: user.id_user,
                user: user.user
            },
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }
            )

            return res.status(200).send({
                mensagem: "Autentificação realizada",
                token: token
            });
        }

        return res.status(401).send({ mensagem: "Erro ao se autentificar" });
    });

};

exports.registerUser = (req, res) => {

    bcryptjs.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).send({ error: err })
        }

        const newUser = Users.create({
            user: req.body.user,
            password: hash
        });

        res.status(200).send({ msg: "Usuário cadastrado" });

    })
};

exports.updateUser = (req, res) => {

    Users.update({
        password: req.body.password
    }, {
        where: {
            id_user: req.body.id_user
        }
    });

    res.status(200).send({
        msg: "Senha foi modificada"
    });

};

exports.checkToken = (req, res) => {
    return res.status(200).send({
        mensagem: "Token validado",
        checktoken: true
    })
}