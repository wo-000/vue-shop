<template>
  <div class="profile">
    <template v-if="buyData && buyData.length > 0">
      <van-card
        v-for="item in buyData"
        :key="item.shopId"
        :num="item.count"
        :price="item.lowestPrice"
        :desc="item.shopName"
        :title="item.name"
        :thumb="item.posterUrl"
      />
      <van-submit-bar :price="sumprice" button-text="提交订单" />
    </template>
    <template v-else>
      <div class="nothing">
        您还没有订单
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyData: this.$store.state.buyDatas
    };
  },
  computed: {
    sumprice() {
      return this.buyData.reduce((total, item) => {
        return total + item.count * item.lowestPrice * 100;
      }, 0);
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.nothing {
  text-align: center;
  padding: 20px;
  color: $light-color;
  font-size: 16px;
}
.collect-item {
  position: relative;
  display: flex;
  padding: 20px;
  .img {
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 130px;
      border-radius: 10px;
    }
  }
  .info {
    position: relative;
    p {
      margin-top: 6px;
      margin-left: 10px;
    }
    .name {
      font-size: 14px;
      font-weight: 700;
    }
    .time {
      font-size: 10px;
      color: $red-color;
      margin-top: 10px;
    }
    .city {
      margin-top: 20px;
      color: $light-color;
    }
    .shopname {
      margin-top: 4px;
      color: $light-color;
    }
    .button-col {
      position: absolute;
      bottom: 30px;
      right: 0px;
    }
  }
}
</style>
<style lang="scss">
.van-submit-bar {
  position: relative;
}
</style>
