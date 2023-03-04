const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

const { register, login } = require("@/controller/user.controller");

const { isPhoneNumber } = require("@/middleware/common.middleware");

const {
  userValidator,
  verifyUser,
  crpytPassword,
} = require("@/middleware/user.middleware");

//注册接口
router.post(
  "/register",
  userValidator,
  verifyUser,
  isPhoneNumber,
  crpytPassword,
  register
);
//登录接口
router.post("/login", login);

module.exports = router;
export {};
