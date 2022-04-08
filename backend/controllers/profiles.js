
const Profiles = require('./../models/profiles');

exports.postProfile = (req, res) => {

    const newProfile = Profiles.create({
        name: req.body.name,
        last_name: req.body.last_name,
        birth_data: req.body.birth_data,
        userIdUser: req.body.user,
        acessLevelLevel: req.body.acess_level
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
        name: profile.name,
        last_name: profile.last_name,
        birth_data: profile.birth_data,
        id_user: profile.userIdUser,
        acess_level: profile.acessLevelLevel
    });

};

exports.getAllProfile = async (req, res) => {

    const profiles = await Profiles.findAll();

    res.status(200).send({
        mensagem: "Perfis encontrados",
        profiles
    });

};