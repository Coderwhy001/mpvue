<template>
  <div class="address">
    <scroll-view scroll-y="true" class="addcont" style="height: 100%">
        <div class="item" v-if="listData.length !== 0">
            <div class="list">
                <div class="addresslist">
                    <div>
                        <span>name</span>
                        <div class="moren">默认</div>
                    </div>
                    <div class="info">
                        <p>mobile</p>
                        <p>address</p>
                    </div>
                    <div @click="toDetail"></div>
                </div>
            </div>
        </div>
        <div class="center" v-else>
            <p>收货地址在哪里</p>
        </div>
    </scroll-view>
    <div class="bottom" >
        <div @click="wxaddress(1)">+新建按钮</div>
        <div @click="wxaddress">一键导入微信地址</div>
    </div>
  </div>
</template>

<script>
import { get, post, getStorageOpenid} from '../../utils'
export default {
    data () {
        return {
            listData: [],
            openId: ''
        }
    },
    onShow() {
        this.openId = getStorageOpenid()
    },
    methods: {
        toDetail () {},
        wxaddress (e) {
    
        },
        async getAddressList () {
            let _this = this
            const data = await get('/address/getListAction', {
                openId: _this.openId
            })
            console.log(data)
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>