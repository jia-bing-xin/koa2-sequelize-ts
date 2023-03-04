const { createUser } = require("@/service/user.service");
const { userRegisterError } = require("@/constant/err.type");
class UserController {
    async register(ctx: any, next: any) {
        // 操作数据库
        try {
            await createUser(ctx.request.body);
            ctx.body = {
                code: 0,
                message: "用户注册成功",
            };
        } catch (err) {
            ctx.app.emit("error", userRegisterError, ctx);
        }
    }
    async login(ctx: { body: string }, next: any) {
        ctx.body = "用户登录成功";
    }
}
const userController = new UserController();
module.exports = userController;
export { };
