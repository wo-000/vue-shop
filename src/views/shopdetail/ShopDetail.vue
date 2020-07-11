<template>
  <div class="detail" v-if="dataInfo">
    <div class="detail-basic">
      <div class="detail-header">
        <div class="detail-poster">
          <img :src="dataInfo.posterUrl + '@208w_276h_1c_1e'" class="poster" />
        </div>
        <div class="detail-header-info">
          <div class="detail-name">
            {{ dataInfo.name }}
          </div>
          <div class="detail-price-bar">
            <div class="detail-price">
              <span>{{ dataInfo.priceList[0] }}</span>
              <span
                ><span class="detail-price-line">-</span>
                <span>{{ dataInfo.priceList[1] }}</span></span
              >
              <span class="detail-price-yuan">元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-venue-address-container">
        <div class="venue-address-container">
          <div class="venue-container">
            <div class="date">{{ dataInfo.showTimeRange }}</div>
            <div class="address-container">
              <div class="address address-city">{{ dataInfo.cityName }}</div>
              <div class="address address-shop">{{ dataInfo.shopName }}</div>
            </div>
          </div>
          <div class="travel-guide">
            <img
              src="data:image/png;base64,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"
              alt=""
              class="travel-guide-icon margin"
            />
          </div>
        </div>
      </div>
      <div class="detail_buttons_container">
        <div class="detail_buttons">
          <div class="detail_button">
            <div class="image_container">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAAGWB6gOAAAAAXNSR0IArs4c6QAAA5RJREFUWAnllzloVEEcxndTKAZTWEg8EI9CISaIB0YLiUdhsgYtRSSIRQoVSZWYQi20SEhpoYWFCBGxERvRShEtglcQUVARMeABgk1E0CLr75v35mXevns1AXXg2//M9z/mezOzs29LpbRWrVYb5ceONNjAcrn83e/fN1Ze6wxZHMMhIjTA2xkiUgdEdwUBDHZpULYMhJVwEq4bbJEPrQOyqY3kJvN0TpW4hJYQ6QbTnxYXikoYGOFkncLfBKYQOuhUvMp4XMt+zC3AuM8dm76TFfGJwH862LvYCI98ZAzRrXFB8OGthGhzAyMB1mkDEwOcQLuHlpoBi4wR0O6WZtzs8yew/a5Pfbgh0BHwCg4GBTvkVkB3nj3JKv2AgPUmiIq9YF9WRpyfvOjTiAShPY5LFkfcMKgk+Q2fVtAvUOw75Basq0Cq3L/G6d6BOgsHapSPcZVcZ33mwJ8B7rmbxHc2FE9gBxgKkQzg+sEA0LFodv2M28W7nBLChOPF1wcaHSrowncC796j0w3SD1aQGu2Qa0TomTcA7/cqGpebUaEqCBY9d2ZNoAo9BtN3Sk1A3mEDW3iL4G15E9w41kc3xpuAg9BWhq/6wBvfIb4VRHcbUjddrmLEtcUWsXPi7MoqllkkT7HcRdKKFS4SVyxPkdSDSAG9Ju0G5gXDTvJ/2cQlYnl0KepiaAGLwXzwA3wFr8BTvl1fsJFG7kJI5a4BC8Bc8A18Ai/BOLk/sZEWEUSxPUTZu2CC/hh4CyaBCi8B68AmoLvjI7gE1A4D+aeA7pRnQCL0IHq5XAW2gmVA7R7Cbnpd7zMQhJDlUEeBuMsEvvBCkj/JacTbC5b6UR+wF8m1fxN8OmrIXQt7CFTBeXLeK8oIwrmS/hGgZR3GGbuc+GKbL0z/ATKFuAXI07EYBDoOF8h/pyVX2+uZ0mhRMcqTkKJi/Dw9+Kj6NKPBClrkcaUJ386msXMaDVaQDqbaCvM5ux92TqPBCrrha+hhX+fNlh5/rh5/PqPBHGoROPVNOQ4k8hpn4gl2xhrzbaT4fqAr4hzzmRUKBNmZCeykv9MPvELgc+v7E5b6+j9xEOjB71D/tls3Isg6SazQ3w70BL8trEbIXYToHSrSEgXZSArpT8sOUJewvELsfJmCbGBRYUWF2HlyC7IJWcLqFWLrFxZkE2uEPfT5zVgd1sQzYvOTbN2CbEGE6YZd7Y9fc1g/W98/YX8BT97yaiJz+ykAAAAASUVORK5CYII="
                class="collect_image collect_img_off"
              />
            </div>
            <div
              @click="collectHandle(dataInfo.shopId)"
              class="collect-button button_text"
            >
              {{ collectText }}
            </div>
          </div>
          <div class="detail_button share_button">
            <div class="image_container"></div>
            <div
              @click="buyHandle(dataInfo.shopId)"
              class="buy-button button_text"
            >
              立即购票
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-html="htmlData" class="shop-info"></div>
  </div>
</template>

<script>
import { shopDetail, recDetail } from "network/shopdetail.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      htmlData: "",
      dataInfo: null,
      collectText: "收藏",
      isCol: false
    };
  },
  created() {
    shopDetail(
      `/api/show/myshow/ajax/performance/recommends/${this.$route.params.id}`,
      {
        sellChannel: 13,
        cityId: 10,
        lng: 0,
        lat: 0
      }
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    recDetail(`/api/show/myshow/ajax/v2/performance/${this.$route.params.id}`, {
      sellChannel: 13,
      cityId: 10,
      lng: 0,
      lat: 0
    })
      .then(res => {
        console.log(res);
        this.dataInfo = res.data;
        this.htmlData = res.data.ticketNotes;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    collectHandle() {
      this.isCol = !this.isCol;
      let obj = { ...this.dataInfo, isCol: this.isCol };
      console.log(this.$store.state.collectDatas);
      this.$store.commit("collectsData", obj);

      if (this.isCol) {
        this.collectText = "已收藏";
      } else {
        this.collectText = "收藏";
      }
    },
    buyHandle() {
      this.num++;
      let obj = { ...this.dataInfo, count: 1 };
      this.$store.dispatch("buyDatas", obj);
      Toast.success("已加入购物车");
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  .detail-basic {
    padding: 20px 20px 24px;
    background: url(//www.dpfile.com/app/myshow/static/img/bg@2x.png);
    background-size: 100% 100%;
  }
  .detail_buttons_container {
    margin: 16px 0 0;
    .detail_buttons {
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
    }
    .detail_button {
      background: hsla(0, 0%, 100%, 0.04);
      border-radius: 6px;
      height: 35px;
      width: 100%;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
  .button_text {
    font-size: 13px;
    color: #fff;
    text-align: left;
  }
  .image_container {
    height: 16px;
    width: 16px;
    img {
      width: 100%;
    }
  }
  .share_button {
    margin-left: 15px;
  }
  .detail-header {
    display: flex;
  }
  .detail-poster {
    width: 104px;
    height: 138px;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail-header-info {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-left: 10px;
    position: relative;
    overflow: hidden;
  }
  .detail-name {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    font-size: 17px;
    text-align: left;
  }
  .detail-price-bar {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding-right: 20px;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    .detail-price {
      position: relative;
      color: #fff;
      font-size: 14px;
    }
  }
}

.shop-info {
  padding: $base-space * 2;
  margin-bottom: $base-space * 5;
}
.detail-venue-address-container {
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.22),
    rgba(19, 7, 77, 0)
  );
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.22),
    rgba(19, 7, 77, 0)
  );
  border-radius: 8px;
  margin-top: 16px;
  padding: 13px 8px 13px 12px;
  .venue-address-container {
    display: flex;
  }
  .address-container {
    display: flex;
    font-size: 13px;
  }
  .address-city {
    padding-right: 10px;
  }
  .address {
    padding-top: $base-space;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .venue-container {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    font-size: 14px;
    color: #fff;
    text-align: left;
  }
  .travel-guide {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    img {
      height: 24px;
      width: 24px;
    }
  }
}
</style>
