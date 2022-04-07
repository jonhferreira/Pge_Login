const Sequelize = require('sequelize');
const db = require('../db');

const Acess_levels = db.define('acess_levels', {
    level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING(45)
    }
});

module.exports = Acess_levels;