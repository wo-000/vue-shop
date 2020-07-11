<template>
  <div id="app">
    <transition name="fade">
      <!-- <keep-alive> -->
      
    <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
    <van-tabbar v-model="active" active-color="#ff0000">
      <van-tabbar-item replace size="40" name="home" to="/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace name="shop" to="/shop" icon="shop-o">商城</van-tabbar-item>
      <van-tabbar-item replace name="carts" to="/carts" icon="bag-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace name="profile" to="/profile" icon="user-o"
        >我的收藏</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import './network/config'
export default {
  data() {
    return {
      active: ""
    };
  },
  watch: {
    $route(to,from){
      console.log(this.$route.path)
      console.log(to.path,from.path)
      this.active=to.path.split('/')[1]
    }
  },
};
</script>
<style lang="scss">
@import url('./assets/css/base.scss');
.van-icon::before{
  font-size: 21px;
}
.fade-enter-active {
  transition: all .8s ease;
}
.fade-enter {
  transform: translateX(100%);
  opacity: 0;
}
</style>
