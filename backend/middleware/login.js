const jwt = require('jsonwebtoken');
const Profiles = require('./../models/profiles');

// funcao que realiza checagem de nivel de acesso
async function levelVerify(req, res, next, level) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const token_decode = jwt.verify(token, process.env.JWT_KEY);
        console.log(token_decode.id_user)
        req.user = token_decode;

        const profile = await Profiles.findOne({ where: { userIdUser: token_decode.id_user } })

        if (profile == null) {
            return res.status(401).send({ mensagem: "Falha de autentificação" });
        }
        else {

            if (profile.accessLevelLevel >= level) {
                next();
            }

            else {
                return res.status(401).send({ mensagem: "Usuário não possui permissão" });
            }
        }
    }
    catch (error) {
        return res.status(401).send({ mensagem: "Falha de autentificação" });
    }
}

async function tokenVerify(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const token_decode = jwt.verify(token, process.env.JWT_KEY);

        req.user = token_decode;

        next();
    }
    catch (error) {
        return res.status(401).send({
            mensagem: "Falha de autentificação",
            checktoken: false
        });
    }
}

// nivel basico de acesso
exports.basicLevel = (req, res, next) => {
    levelVerify(req, res, next, 1);
};

// nivel intermediario de acesso
exports.intermediaryLevel = (req, res, next) => {
    levelVerify(req, res, next, 2);
};

// nivel avancado de acesso
exports.advancedLevel = (req, res, next) => {
    levelVerify(req, res, next, 3);
};

exports.tokenVerify = (req, res, next) => {
    tokenVerify(req, res, next)
}