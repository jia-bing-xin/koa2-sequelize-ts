const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')

const {
  tokenExpiredError,
  invalidToken,
  hasNotAdminPermission,
} = require('../constant/err.type')

const auth = async (ctx: any, next: any) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  try {
    // user中包含了payload的信息(id, user_name, is_admin)
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
  } catch (err: any) {
    switch (err.name) {
      case 'TokenExpiredError':
        return ctx.app.emit('error', tokenExpiredError, ctx)
      case 'JsonWebTokenError':
        return ctx.app.emit('error', invalidToken, ctx)
    }
  }

  await next()
}

const hadAdminPermission = async (ctx: any, next: any) => {
  const { is_admin } = ctx.state.user

  if (!is_admin) {
    console.error('该用户没有管理员的权限', ctx.state.user)
    return ctx.app.emit('error', hasNotAdminPermission, ctx)
  }

  await next()
}

module.exports = {
  auth,
  hadAdminPermission,
}
