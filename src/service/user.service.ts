const User = require('@/model/user.model')
class UserService {
    async createUser(data: any) {
        const res = await User.create({
            user_name: data.user_name,
            password: data.password
        });
        return res.dataValues
    }
    async getUerInfo(data: any) {
        const res = await User.findOne({
            attributes: ['user_name', 'password'],
            where: { user_name: data.user_name },
        })
        return res ? res.dataValues : null
    }
}
const userService = new UserService()
module.exports = userService
export { }