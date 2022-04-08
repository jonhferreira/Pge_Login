const Acess_levels = require('../models/acess_levels');

exports.postAcess_level = (req, res) => {

    const newAcess_level = Acess_levels.create({
        level: req.body.level,
        description: req.body.description
    });

    res.status(200).send({
        msg: "Novo nível adicionado com sucesso"
    });

};

exports.getAllAcess_level = async (req, res) => {

    const acess_levels = await Acess_levels.findAll();

    return res.status(200).send({
        mensagem: "Novo nível adicionado com sucesso",
        levels: acess_levels
    });
}

exports.deleteAcess_level = (req, res) => {
    Acess_levels.destroy({
        where: {
            level: req.params.level
        }
    })

    return res.status(200).send({ mensagem: "Nivel de acesso excluido" })
}