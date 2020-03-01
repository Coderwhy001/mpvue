<template>
  <div class="goods">
      <div class="swiper">
          <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
              <block v-for="(item, index) in gallery" :key="index">
                  <swiper-item class="swiper-item">
                      <img :src="item.img_url" alt="" class="slide-image" />
                  </swiper-item>
              </block>
          </swiper>
          <button class="share" hover-class="none" open-type="share" value="">分享商品</button>
      </div>
      <div class="swiper-b">
          <div class="item">30天无忧退货</div>
          <div class="item">48小时快速退款</div>
          <div class="item">满88元免邮费</div>
      </div>
      <div class="goods-info">
          <div class="c">
              <p>{{info.name}}</p>
              <p>{{info.goods_brief}}</p>
              <p>￥{{info.retail_price}}</p>
              <div class="brand" v-if="brand.name">
                  <p>{{brand.name}}</p>
              </div>
          </div>
      </div>
      <div class="section-nav" @click="showType">
          <div>请选择规格数量</div>
          <div></div>
      </div>
      <!-- 选择规格的弹出层 -->
      
  </div>
</template>

<script>
import { get, post } from '../../utils'
// hover-class是手机屏幕的高亮显示，一般要被干掉 open-type是必须的，可以使小程序触发分享功能
// swiper中interval为播放间隔时间，duration为持续时间 
export default {
    data () {
        return {
            gallery: [], // banner图
            id: '',
            openId: '',
            info: {},
            brand: {},
            showpop:false
        }
    },
    // 商品分享
    onShareAppMessage() {
        console.log(this.info.name)
        return {
            title: this.info.name,
            path: '/pages/goods/main?id' + this.info.id,
            imageUrl: this.gallery[0].img_url
        }
    },
    mounted () {
        this.openid = wx.getStorageSync('openId') || '';
        this.goodsDetail()
    },
    methods: {
        async goodsDetail () {
            const data = await get('/goods/detailaction', {
                id: 1009024,
                openId: this.openid
            })
            console.log(data)
            this.info = data.info
            this.gallery = data.gallery
        },
        showType () {
            this.showpop = !this.showpop // 点击一下出现 再点一下消失
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
