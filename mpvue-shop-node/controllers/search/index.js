const { mysql } = require('../../mysql')

async function indexaction (ctx) {
    const openId = ctx.query.openId
    // 默认关键字
    const defaultKeyword = await mysql('nideshop_keywords').where({
        is_default : 1
    }).limit(1).select()
    // 取出热门关键字
    const hotKeywordList = await mysql('nideshop_keywords').distinct('keyword').column('keyword', 'is_hot').limit(10).select()

    const historyData = await mysql('nideshop_search_history').where({
        'user_id': openId
    }).limit(10).select()
    ctx.body = {
        'defaultKeyword': defaultKeyword[0],
        'hotKeywordList': hotKeywordList,
        'historyData': historyData
    }
}
// 添加搜索历史
async function addHistoryAction(ctx) {
    const { openId, keyword } = ctx.request.body //拿到前端定义的数据 输入的数据

    const oldData = await mysql('nideshop_search_history').where({
        'user_id' : openId,
        'keyword' : keyword
    })
    if (oldData.length == 0) {
        const data = await mysql('nideshop_search_history').insert({
            'user_id' : openId,
            'keyword' : keyword,
            'add_time' : parseInt(new Date().getTime() / 1000)
        })
        if (data) {
            ctx.body = {
                data: 'success'
            }
        } else {
            ctx.body = {
                data: 'fail'
            }
        }
    } else {
        ctx.body = {
            data: '已经有记录了'
        }
    }
}

module.exports = {
    addHistoryAction,
    indexaction
}