const Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'users_pge',
    'root',
    'Pge_04_37_20',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        define: {
            timestamps: false
        }
    }
);

module.exports = sequelize;