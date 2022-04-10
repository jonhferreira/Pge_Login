const Sequelize = require('sequelize');
const db = require('./../db');
const Users = require('./users');
const Access_levels = require('./access_levels');

const Profiles = db.define('profiles', {
    id_profile: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cpf: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING(60)
    },
    last_name: {
        type: Sequelize.STRING(60)
    },
    birth_data: {
        type: Sequelize.DATE
    }
});

Profiles.belongsTo(Users, {
    constraint: true,
    foreignkey: 'user'
});

Profiles.belongsTo(Access_levels, {
    constraint: true,
    foreignkey: 'level'
})

module.exports = Profiles;