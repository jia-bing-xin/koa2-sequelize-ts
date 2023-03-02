//引入别名库
require('module-alias/register')

const app = require('./app')

const { APP_PORT } = require('@/config/config.default')

app.listen(APP_PORT, () => {
    console.log(`服务器已启动:http://localhost:${APP_PORT}`)
})