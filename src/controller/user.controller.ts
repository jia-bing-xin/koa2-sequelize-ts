class UserController {
    async register(ctx: any, next: any) {
        console.log('用户注册成功', ctx.request.body)
        ctx.body = '用户注册成功'
    }
    async login(ctx: { body: string }, next: any) {
        ctx.body = '用户登录成功'
    }
}
const userController = new UserController()
module.exports = userController
export { }