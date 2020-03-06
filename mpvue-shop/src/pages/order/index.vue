<template>
  <div class="order">
      <div class="address" v-if="address.name" @click="toAddressList">
          <div class="item">
              <div class="list">
                  <div class="addresslist">
                      <div>
                          <span>张三</span>
                          <div class="moren">默认</div>
                      </div>
                      <div class="info">
                          <p>mobile</p>
                          <p>address</p>
                      </div>
                      <div></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="seladdress" v-else @click="toadd">请选择默认地址</div>

      <div class="orderbox">
          <div class="item">
              <div>商品合计</div>
              <div>￥100</div>
          </div>
          <div class="item">
              <div>运费</div>
              <div>免运费</div>
          </div>
          <div class="item">
              <div>优惠券</div>
              <div>暂无</div>
          </div>
      </div>

      <div class="cartlist">
          <div class="item">
              <div class="con">
                  <div class="left">
                      <div class="img">
                          <img src="" alt="">
                      </div>
                      <div class="info">
                          <p>name</p>
                          <p>price</p>
                      </div>
                  </div>
                  <div class="right">
                      <div class="num">x14</div>
                  </div>
              </div>
          </div>
      </div>

      <div class="bottom">
          <div>实付：￥ 599</div>
          <div class="pay">支付</div>
      </div>
  </div>
</template>

<script>
import { get, post} from '../../utils'
export default {
    data () {
        return {
            address: {},
            allprice: ''
        }
    },
    methods: {
        toAddressList () {
            wx.navigateTo({
                url: '/pages/addressSelect/main'
            })
        },
        toadd() {
            wx.navigateTo({
                url: '/pages/addaddress/main'
            })
        },
        async getDetail () {

        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>