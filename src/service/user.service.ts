const User = require('@/model/user.model')
class UserService {
    async createUser(data: any) {
        const res = await User.create({
            user_phone: data.user_phone,
            user_name: data.user_phone,
            password: data.password
        });
        return res.dataValues
    }
    async getUerInfo(data: any) {
        const res = await User.findOne({
            // attributes: ['user_phone', 'password'],//返回指定属性
            where: { user_phone: data.user_phone },
        })
        return res ? res.dataValues : null
    }
    async updateById(data: any) {
        const newUser = { password: data.password }
        const whereOpt = { user_phone: data.user_phone }
        const res = await User.update(newUser, { where: whereOpt })
        return res[0] > 0 ? true : false
    }
}
const userService = new UserService()
module.exports = userService
export { }