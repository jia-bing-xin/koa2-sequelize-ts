module.exports = {
  userFormateError: (data: string) => ({
    code: '10001',
    message: `${data}不能为空`,
    result: '',
  }),
  userAlreadyExited: {
    code: '10002',
    message: '手机号已经存在',
    result: '',
  },
  userRegisterError: {
    code: '10003',
    message: '注册错误,请重试',
    result: '',
  },
  userDoesNotExist: {
    code: '10004',
    message: '手机号不存在',
    result: '',
  },
  userLoginError: {
    code: '10005',
    message: '登录失败,请重新登录',
    result: '',
  },
  invalidPassword: {
    code: '10006',
    message: '密码不匹配',
    result: '',
  },
  rulePhone: {
    code: '10007',
    message: '手机号格式不正确',
    result: '',
  },
  rulePassword: {
    code: '10008',
    message: '密码格式不正确',
    result: '',
  },
  rulePasswordIdentical: {
    code: '10008',
    message: '新密码与旧密码不能相同',
    result: '',
  },
  tokenExpiredError: {
    code: '10101',
    message: 'token已过期',
    result: '',
  },
  invalidToken: {
    code: '10102',
    message: '无效的token',
    result: '',
  },
  hasNotAdminPermission: {
    code: '10103',
    message: '没有管理员权限',
    result: '',
  },
  fileUploadError: {
    code: '10201',
    message: '商品图片上传失败',
    result: '',
  },
  unSupportedFileType: {
    code: '10202',
    message: '不支持的文件格式',
    result: '',
  },
  goodsFormatError: {
    code: '10203',
    message: '商品参数格式错误',
    result: '',
  },
  publishGoodsError: {
    code: '10204',
    message: '发布商品失败',
    result: '',
  },
  invalidGoodsID: {
    code: '10205',
    message: '无效的商品id',
    result: '',
  },
  cartFormatError: {
    code: '10301',
    message: '购物车数据格式错误',
    result: '',
  },
  addrFormatError: {
    code: '10401',
    message: '地址数据格式错误',
    result: '',
  },
  orderFormatError: {
    code: '10501',
    message: '订单数据格式错误',
    result: '',
  },
}
