const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./../models/users')


exports.postLogin = async (req, res) => {

    const user_email = req.body.email;
    console.log("aqui", user_email)
    const user_password = req.body.password;

    const user = await Users.findOne({
        where: {
            email: user_email
        }
    });

    bcryptjs.compare(user_password, user.password, (err, result) => {
        if (err) {
            return res.status(401).send({ mensagem: "Erro ao se autentificar" });
        }
        if (result) {
            const token = jwt.sign({
                id_user: user.id_user,
                email: user.email
            },
                "chave",
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
            email: req.body.email,
            password: hash
        });

        res.status(200).send({ msg: "Usuário cadastrado" });

    })
};

exports.checkToken = (req, res) => {
    return res.status(200).send({
        mensagem: "Token validado",
        checktoken: true
    })
}