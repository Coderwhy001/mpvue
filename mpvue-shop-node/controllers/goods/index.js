const { mysql } = require('../../mysql')

// 商品详情页数据
async function detailAction(ctx) {
    const goodsId = ctx.query.id
    const openId = ctx.query.openId
    console.log(goodsId)
    // 商品信息获取
    const info = await mysql('nideshop_goods').where({
        'id': goodsId
    }).select()
    // 获取商品的图片
    const gallery = await mysql('nideshop_goods_gallery').where({
        'goods_id': goodsId
    })
    ctx.body = {
        'info': info,
        'gallery': gallery
        
    }
}
module.exports = {
    detailAction
}