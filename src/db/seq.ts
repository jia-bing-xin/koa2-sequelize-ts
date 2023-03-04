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
// seq.authenticate().then((res: any) => {
//     console.log(res, '数据成功')
// }).catch((err: any) => {
//     console.log('err', err)
// })
module.exports = seq
export { }