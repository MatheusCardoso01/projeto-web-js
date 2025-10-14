const Sequelize = require('sequelize');

const sequelize = new Sequelize('app', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;