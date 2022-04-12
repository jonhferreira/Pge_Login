const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/users')


exports.postLogin = async (req, res) => {

    try {
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

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao logar no sistema",
            error
        });
    }


};

exports.registerUser = (req, res) => {
    try {
        bcryptjs.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).send({ error: err })
            }

            Users.create({
                user: req.body.user,
                password: hash
            });

            return res.status(200).send({ mensagem: "Usuário cadastrado" });

        })

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao se registrar no sistema",
            error
        });
    }

};

exports.updateUser = (req, res) => {
    try {

        bcryptjs.hash(req.body.new_password, 10, (err, hash) => {
            if (err) {
                return res.status(500).send({ error: err })
            }

            Users.update({
                password: hash
            },
                {
                    where: {
                        user: req.body.user
                    }
                });

            return res.status(200).send({
                mensagem: "Senha foi modificada"
            });
        });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao modificar senha",
            error
        });
    }

};

exports.deleteUser = (req, res) => {
    try {
        Users.destroy({
            where: {
                id_user: req.params.id_user
            }
        });

        return res.status(200).send({ mensagem: "Usuário foi excluido" });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao excluir usuário",
            error
        });
    }
}

exports.checkToken = (req, res) => {
    return res.status(200).send({
        mensagem: "Token validado",
        checktoken: true
    });
}