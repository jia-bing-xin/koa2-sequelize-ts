const { DataTypes } = require('sequelize')
const seq = require('@/db/seq')
// 创建模型
const User = seq.define('zd_user', {
    user_phone: {
        type: DataTypes.STRING,
        allowNull: false,//不允许为空
        unique: true,//唯一
        comment: '手机号,唯一'
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,//不允许为空
        comment: '用户名,唯一'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,//不允许为空
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,//不允许为空\
        defaultValue: 0,
        comment: '是否为管理员'
    }
})
//先删除后创建
// User.sync({ force: true })

module.exports = User
export { }