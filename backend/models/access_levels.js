const Sequelize = require('sequelize');
const db = require('../db');

const Access_levels = db.define('access_levels', {
    level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING(45)
    }
});

module.exports = Access_levels;