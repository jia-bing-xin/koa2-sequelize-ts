const bcrypt = require("bcryptjs");
const { getUerInfo } = require("../service/user.service");
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword
} = require("../constant/err.type");
//用户名或密码是否为空
const userValidator = async (ctx: any, next: any) => {
  if (ctx.request.body.hasOwnProperty('password')) {
    const { user_phone, password } = ctx.request.body;
    // 合法性
    if (!user_phone) {
      ctx.app.emit("error", userFormateError('手机号'), ctx);
      return;
    } else if (!password) {
      ctx.app.emit("error", userFormateError('密码'), ctx);
      return;
    }
  } else {
    const { user_phone, oldpassword, newpassword } = ctx.request.body;
    if (!user_phone) {
      ctx.app.emit("error", userFormateError('手机号'), ctx);
      return;
    } else if (!oldpassword) {
      ctx.app.emit("error", userFormateError('旧密码'), ctx);
      return;
    } else if (!newpassword) {
      ctx.app.emit("error", userFormateError('新密码'), ctx);
      return;
    }
  }
  await next();
};
//用户名是否存在
const verifyUser = async (ctx: any, next: any) => {
  const { user_phone } = ctx.request.body;
  try {
    const res = await getUerInfo({ user_phone });
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
//密码加密
const crpytPassword = async (ctx: any, next: any) => {
  const { password } = ctx.request.body;

  const salt = bcrypt.genSaltSync(10);
  // hash保存的是 密文
  const hash = bcrypt.hashSync(password, salt);

  ctx.request.body.password = hash;

  await next();
};
//登录
const verifyLogin = async (ctx: any, next: any) => {
  // 1. 判断用户是否存在(不存在:报错)
  const { user_phone, password } = ctx.request.body;
  try {
    const res = await getUerInfo({ user_phone });
    if (!res) {
      ctx.app.emit("error", userDoesNotExist, ctx);
      return;
    }
    // 2. 密码是否匹配(不匹配: 报错)
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit("error", invalidPassword, ctx);
      return;
    }
  } catch (err) {
    return ctx.app.emit("error", userLoginError, ctx);
  }

  await next();
};
//修改密码
const verifyChangePassword = async (ctx: any, next: any) => {
  // 1. 判断用户是否存在(不存在:报错)
  const { user_phone, oldpassword, newpassword } = ctx.request.body;
  try {
    const res = await getUerInfo({ user_phone });
    if (!res) {
      ctx.app.emit("error", userDoesNotExist, ctx);
      return;
    }
    // 2. 密码是否匹配(不匹配: 报错)
    if (!bcrypt.compareSync(oldpassword, res.password)) {
      ctx.app.emit("error", invalidPassword, ctx);
      return;
    }
  } catch (err) {
    return ctx.app.emit("error", userLoginError, ctx);
  }
  ctx.request.body.password = newpassword
  await next();
};
module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
  verifyChangePassword,
};
export { };
