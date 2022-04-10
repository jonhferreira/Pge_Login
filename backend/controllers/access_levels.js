const Access_levels = require('../models/access_levels');

exports.postAccess_level = (req, res) => {

    const newAcess_level = Access_levels.create({
        level: req.body.level,
        description: req.body.description
    });

    res.status(200).send({
        msg: "Novo nível adicionado com sucesso"
    });

};

exports.getAllAccess_level = async (req, res) => {

    const access_levels = await Access_levels.findAll();

    return res.status(200).send({
        mensagem: "Novo nível adicionado com sucesso",
        levels: access_levels
    });
}

exports.deleteAccess_level = (req, res) => {
    Acess_levels.destroy({
        where: {
            level: req.params.level
        }
    })

    return res.status(200).send({ mensagem: "Nivel de acesso excluido" })
}