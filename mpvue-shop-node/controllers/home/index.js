const { mysql } = require('../../mysql')

module.exports = async (ctx) =>{
  // 轮播图数据
  const banner = await mysql('nideshop_ad').where({
    ad_position_id: 1
  }).select()

  //tab 类数据
  const channel = await mysql('nideshop_channel').select()

  //品牌列表
  const brandlist = await mysql('nideshop_brand').where({
    is_new: 1
  }).orderBy('new_sort_order', 'asc').limit(4).select()
  // 新品首发
  const newGoods = await mysql('nideshop_goods').whereIn('id', [1181000, 1135002, 1134030, 1134032]).andWhere('is_new', 1).select()

  // 人气推荐
  const hotGoods = await mysql('nideshop_goods').column('id', 'name', 'list_pic_url', 'retail_price', 'goods_brief').where({
    is_hot: 1
  }).limit(5).select()
  ctx.body ={
    'banner':banner,
    'channel':channel,
    'brandlist':brandlist,
    'newGoods':newGoods,
    'hotGoods' : hotGoods,
  }
}

