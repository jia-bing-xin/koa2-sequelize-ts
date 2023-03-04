const { rulePhone } = require("@/constant/err.type");
//验证是否是手机号
const isPhoneNumber = async (ctx: any, next: any) => {
    const reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    const { user_name } = ctx.request.body;
    // 合法性
    if (!reg_tel.test(user_name)) {
        ctx.app.emit("error", rulePhone, ctx);
        return;
    }
    await next();
};
module.exports = {
    isPhoneNumber
}
export { }