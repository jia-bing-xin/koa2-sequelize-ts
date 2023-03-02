const fs = require('fs')

const Router = require('koa-router')

const router = new Router()

fs.readdirSync(__dirname).forEach((file: string) => {
    if (file !== 'index.ts') {
        let r = require('./' + file)
        router.use(r.routes())
    }
})

module.exports = router
export { }