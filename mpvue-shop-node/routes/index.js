const router = require('koa-router')({
  prefix: '/lm'
  // 路由前缀
})
const controllers = require('../controllers/index')

router.get('/index/index',controllers.home.index)

module.exports = router