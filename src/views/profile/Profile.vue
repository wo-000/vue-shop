<template>
  <div class="profile">
    <template v-if="collectData && collectData.length > 0">
      <div class="collect-item" v-for="item in collectData" :key="item.shopId">
        <div class="img">
          <img :src="item.posterUrl" alt="" />
        </div>
        <div class="info">
          <p class="name">{{ item.name }}</p>
          <p class="time">{{ item.showTimeRange }}</p>
          <p class="city">{{ item.cityName }}</p>
          <p class="shopname">{{ item.shopName }}</p>
          <p class="button-col" @click="cancelCol(item.shopId)">
            <van-button size="small" type="warning">已收藏</van-button>
          </p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="nothing">
        您还没有收藏过
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectData: this.$store.state.collectDatas
    };
  },
  methods: {
    cancelCol(shopid) {
      let obj = this.collectData.filter(item => {
        console.log(item);
        if (item.shopId == shopid) {
          item.isCol = false;
          return item;
        }
      });
      console.log(obj[0]);
      this.$store.commit("collectsData", obj[0]);
    }
  }
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
