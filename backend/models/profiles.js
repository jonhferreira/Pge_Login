const Sequelize = require('sequelize');
const db = require('./../db');
const Users = require('./users');
const Acess_levels = require('./acess_levels');

const Profiles = db.define('profiles', {
    id_profile: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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

Profiles.belongsTo(Acess_levels, {
    constraint: true,
    foreignkey: 'level'
})

module.exports = Profiles;