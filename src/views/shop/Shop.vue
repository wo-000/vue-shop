<template>
  <div id="shop">
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="item in topListsData" :key="item.kingkongId">
        <van-image width="66%" :src="item.picUrl" />
        <p>{{ item.title }}</p>
      </van-grid-item>
    </van-grid>
    <div class="item" v-for="item in listsData" :key="item.activityId">
      <shop-title :title="item.title"></shop-title>
      <van-grid :gutter="6" :border="false" :column-num="3">
        <van-grid-item
          v-for="iteminfo in item.groupList[0].dealList"
          :key="iteminfo.dealId"
        >
          <van-image :src="iteminfo.dealPhoto" />
          <p class="title">{{ iteminfo.dealName }}</p>
          <p class="price">￥{{ iteminfo.dealPrice }}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import ShopTitle from "./ShopTitle";
import { shopListsAjax, shopAjax } from "network/shop.js";
export default {
  data() {
    return {
      title: "迪士尼经典",
      topListsData: [],
      listsData: []
    };
  },
  components: {
    ShopTitle
  },
  created() {
    shopListsAjax("/api/shop/mall/mallpro/v3/kingkong/list.json")
      .then(res => {
        console.log(res);
        res.data.splice(3, 1);
        this.topListsData = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    shopAjax("/api/shop/mall/mallpro/v3/activity/list.json")
      .then(res => {
        console.log(res);
        this.listsData = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="scss">
#shop {
  padding-bottom: 49px;
  .item {
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-weight: 700;
      line-height: 18px;
      color: $base-color;
      font-size: $font-size;
      margin-top: $base-space * 0.4;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: $font-size * 1.4;
    }
    .price {
      color: $red-color;
      font-size: $font-size * 1.6;
      margin-top: $base-space;
    }
  }
}
</style>
