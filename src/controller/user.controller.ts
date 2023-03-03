const { createUser } = require('@/service/user.service')
class UserController {
    async register(ctx: any, next: any) {
        // 1.获取数据
        // const { user_name, password } = ctx.request.body
        // 2.操作数据库
        const res = await createUser(ctx.request.body)
        console.log(res)
        // 3.返回结果
        ctx.body = ctx.request.body
    }
    async login(ctx: { body: string }, next: any) {
        ctx.body = '用户登录成功'
    }
}
const userController = new UserController()
module.exports = userController
export { }