const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

const {
  register,
  login,
  changePassword,
} = require("@/controller/user.controller");

const { isPhoneNumber } = require("@/middleware/common.middleware");

const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
  verifyChangePassword
} = require("@/middleware/user.middleware");

//注册接口
router.post(
  "/register",
  userValidator,
  isPhoneNumber,
  verifyUser,
  crpytPassword,
  register
);
//登录接口
router.post("/login", userValidator, isPhoneNumber, verifyLogin, login);

//密码修改接口
router.post(
  "/changePassword",
  userValidator,
  isPhoneNumber,
  verifyChangePassword,
  crpytPassword,
  changePassword
);

module.exports = router;
export { };
