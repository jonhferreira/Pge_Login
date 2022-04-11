
const Profiles = require('./../models/profiles');

exports.postProfile = (req, res) => {

    const newProfile = Profiles.create({
        cpf: req.body.cpf,
        name: req.body.name,
        last_name: req.body.last_name,
        birth_data: req.body.birth_data,
        userIdUser: req.body.user,
        accessLevelLevel: req.body.access_level
    });

    res.status(200).send({
        msg: "Perfil foi adicionado"
    });

};

exports.getProfile = async (req, res) => {

    const profile = await Profiles.findOne({ where: { userIdUser: req.params.id_user } })

    if (profile == null) {
        res.status(404).send({
            mensagem: "Perfil não encontrado"
        });
    }

    res.status(200).send({
        mensagem: "Perfil encontrado",
        cpf: profile.cpf,
        name: profile.name,
        last_name: profile.last_name,
        birth_data: profile.birth_data,
        user: profile.userIdUser,
        access_level: profile.accessLevelLevel
    });

};

exports.getAllProfile = async (req, res) => {

    const profiles = await Profiles.findAll();

    res.status(200).send({
        mensagem: "Perfis encontrados",
        profiles
    });

};

exports.updateProfile = (req, res) => {

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

    res.status(200).send({
        msg: "Perfil foi atualizado"
    });

};


exports.deleteProfile = (req, res) => {
    Profiles.destroy({
        where: {
            userIdUser: req.params.id_user
        }
    })

    return res.status(200).send({ mensagem: "Perfil foi excluido" })
}