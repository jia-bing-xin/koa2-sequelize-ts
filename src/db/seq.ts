const { Sequelize } = require('sequelize')
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB,
} = require('../config/config.default')
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
})
module.exports = seq
export { }