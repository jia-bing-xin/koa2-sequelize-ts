const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

const { isPhoneNumber, isAdmin } = require("@/middleware/common.middleware");
const { auth } = require("@/middleware/auth.middleware");

const {
  register,
  login,
  changePassword,
} = require("@/controller/user.controller");

const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
  verifyChangePassword,
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
router.post("/login", userValidator, isAdmin, verifyLogin, login);

//密码修改接口
router.post(
  "/changePassword",
  userValidator,
  isPhoneNumber,
  auth,
  verifyChangePassword,
  crpytPassword,
  changePassword
);

module.exports = router;
export {};
