const Access_levels = require('../models/access_levels');

exports.postAccess_level = (req, res) => {
    try {
        Access_levels.create({
            level: req.body.level,
            description: req.body.description
        });

        return res.status(200).send({
            mensagem: "Novo nível adicionado com sucesso"
        });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao adicionar nivel de acesso",
            error
        });
    }


};

exports.getAllAccess_level = async (req, res) => {
    try {
        const access_levels = await Access_levels.findAll();

        return res.status(200).send({
            mensagem: "Novo nível adicionado com sucesso",
            levels: access_levels
        });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao acessar niveis",
            error
        });
    }

}

exports.deleteAccess_level = (req, res) => {
    try {
        Access_levels.destroy({
            where: {
                level: req.params.level
            }
        });

        return res.status(200).send({ mensagem: "Nivel de acesso excluido" });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao deletar nivel de acesso",
            error
        });
    }



}