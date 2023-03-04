const { getUerInfo } = require("../service/user.service");
const {
    userFormateError,
    userAlreadyExited,
    userRegisterError
} = require("@/constant/err.type");
//用户名或密码是否为空
const userValidator = async (ctx: any, next: any) => {
    const { user_name, password } = ctx.request.body;
    // 合法性
    if (!user_name || !password) {
        ctx.app.emit("error", userFormateError, ctx);
        return;
    }
    await next();
};
//用户名是否存在
const verifyUser = async (ctx: any, next: any) => {
    const { user_name } = ctx.request.body;
    try {
        const res = await getUerInfo({ user_name });
        if (res) {
            ctx.app.emit("error", userAlreadyExited, ctx);
            return;
        }
    } catch (err) {
        ctx.app.emit("error", userRegisterError, ctx);
        return;
    }
    await next();
};
module.exports = {
    userValidator,
    verifyUser
}
export { }