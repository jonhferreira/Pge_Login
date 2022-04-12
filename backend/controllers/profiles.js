
const Profiles = require('./../models/profiles');

exports.postProfile = (req, res) => {
    try {

        Profiles.create({
            cpf: req.body.cpf,
            name: req.body.name,
            last_name: req.body.last_name,
            birth_data: req.body.birth_data,
            userIdUser: req.body.user,
            accessLevelLevel: req.body.access_level
        });

        return res.status(200).send({
            mensagem: "Perfil foi adicionado"
        });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao adicionar perfil",
            error
        });
    }


};

exports.getProfile = async (req, res) => {

    try {
        const profile = await Profiles.findOne({ where: { userIdUser: req.params.id_user } })

        if (profile == null) {
            return res.status(404).send({
                mensagem: "Perfil não encontrado"
            });
        }

        return res.status(200).send({
            mensagem: "Perfil encontrado",
            cpf: profile.cpf,
            name: profile.name,
            last_name: profile.last_name,
            birth_data: profile.birth_data,
            user: profile.userIdUser,
            access_level: profile.accessLevelLevel
        });


    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao acessar perfil",
            error
        });
    }

};

exports.getAllProfile = async (req, res) => {

    try {
        const profiles = await Profiles.findAll();

        return res.status(200).send({
            mensagem: "Perfis encontrados",
            profiles
        });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao acessar perfis",
            error
        });
    }


};

exports.updateProfile = (req, res) => {

    try {
        Profiles.update({
            cpf: req.body.cpf,
            name: req.body.name,
            last_name: req.body.last_name,
            birth_data: req.body.birth_data,
            accessLevelLevel: req.body.access_level
        }, {
            where: {
                userIdUser: req.user.id_user
            }
        });

        return res.status(200).send({
            msg: "Perfil foi atualizado"
        });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao atualizar perfil",
            error
        });
    }


};


exports.deleteProfile = (req, res) => {
    try {
        Profiles.destroy({
            where: {
                userIdUser: req.params.id_user
            }
        });

        return res.status(200).send({ mensagem: "Perfil foi excluido" });

    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao excluir perfil",
            error
        });
    }

}