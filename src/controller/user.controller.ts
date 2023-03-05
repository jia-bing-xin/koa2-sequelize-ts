const jwt = require('jsonwebtoken')
const { createUser, getUerInfo, updateById } = require("@/service/user.service");
const { userRegisterError } = require("@/constant/err.type");
const { JWT_SECRET } = require('../config/config.default')
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
  async login(ctx: any, next: any) {
    const { password, ...res } = await getUerInfo({ user_phone: ctx.request.body.user_phone })
    ctx.body = {
      code: 0,
      message: "用户登录成功",
      result: {
        ...res,
        token: jwt.sign(res, JWT_SECRET, { expiresIn: '1800' }),
      },
    }
  }
  async changePassword(ctx: any, next: any) {
    // 2. 操作数据库
    if (await updateById(ctx.request.body)) {
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: '',
      }
    } else {
      ctx.body = {
        code: '10007',
        message: '修改密码失败',
        result: '',
      }
    }
    // 3. 返回结果
    console.log('ctx', ctx.request.body)
    ctx.body = {
      code: 0,
      message: "密码修改成功",
    }
  }
}
const userController = new UserController();
module.exports = userController;
export { };
