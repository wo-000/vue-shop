<template>
  <div>
    <home-title
      v-if="rushDatas && rushDatas.length"
      title="今日必抢"
    ></home-title>
    <div class="tody-rush grid" v-if="rushDatas && rushDatas.length">
      <grid-item-con
        :rushwidth="rushwidth"
        v-for="item in rushDatas"
        :key="item.tpId"
        :title="item.name"
        :imgsrc="item.posterUrl + '@220w_294h_1c_1e'"
        @click.native="jump(item.performanceId)"
      ></grid-item-con>
    </div>
    <home-title title="大咖新动态"></home-title>
    <div class="stars-news grid">
      <grid-item-con
        :rushwidth="starswidth"
        v-for="item in starsData"
        :key="item.id"
        :title="item.celebrityName"
        :imgsrc="item.headUrl"
      >
        <p class="info">{{ item.recommendTag }}</p>
      </grid-item-con>
    </div>
    <home-title title="什么值得看"></home-title>
    <div class="stars-news grid">
      <grid-item-con
        :rushwidth="lookwidth"
        v-for="item in rankList"
        :key="item.rankId"
        :title="item.title"
        :imgsrc="item.coverUrl"
      >
        <p class="info">{{ item.shortTitle }}</p>
      </grid-item-con>
    </div>
    <home-title title="为你推荐"></home-title>
    <div class="home-lists">
      <van-pull-refresh v-model="refreshing">
        <van-list
          v-model="loading"
          :finished="finished"
          offset="1"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <grid-item-con
            :rushwidth="recommendwidth"
            v-for="item in recommendData"
            :key="item.performanceId"
            :title="item.name"
            :imgsrc="item.posterUrl+'@338w_450h_1c_1e'"
            @click.native="jump(item.performanceId)"
          >
            <p class="time">{{item.showTimeRange}}</p>
            <p class="price">{{item.lowestPrice}} <i>起</i></p>
          </grid-item-con>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import GridItemCon from "components/common/GridItemCon";
import HomeTitle from "./HomeTitle";

import { homeAjax, starsData, rankList, recommendAjax } from "network/home.js";

// import {debounce} from 'assets/js/until.js';
export default {
  data() {
    return {
      starswidth: "starswidth",
      imgWidth: "42px",
      lookwidth: "lookwidth",
      recommendwidth: "recommendwidth",
      rushwidth: "rushwidth",
      rushDatas: [],
      starsData: [],
      rankList: [],
      recommendData:[],
      page:0,
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  components: {
    HomeTitle,
    GridItemCon
  },
  methods: {
    jump(id){
      this.$router.push({
        path:`/shopdetail/${id}`
      })
    },
    recommendAjaxData(){
      recommendAjax(
        `/api/show/myshow/ajax/performances/0;st=4;p=${this.page};s=10;tft=0?`,
        {
          sellChannel: 13,
          cityId: 10,
          lng: 0,
          lat: 0
        }
      )
        .then(res => {
          console.log(res);

          this.recommendData=this.recommendData.concat(res.data);
          this.loading = false;
          if(res.data.length<10){
            this.finished = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
        
    },
    onLoad() {
      this.page++;
      this.recommendAjaxData()
    }
  },
  created() {
    homeAjax("/api/show/myshow/ajax/performances/rob/main", {
      uuid: "ctzqurvm177883v7nx7314599k0zun007115fkxs54sa69jb5i82l7r5g36c34kn",
      clientType: 1,
      os: 1,
      sellChannel: 13,
      cityId: 10,
      lng: 0,
      lat: 0
    })
      .then(res => {
        console.log(res);
        this.rushDatas = res.data;
      })
      .catch(err => {
        console.log(err);
      });

    starsData("/api/show/myshow/ajax/celebrityBasicList/query", {
      uuid: "ctzqurvm177883v7nx7314599k0zun007115fkxs54sa69jb5i82l7r5g36c34kn",
      clientType: 1,
      os: 1,
      sellChannel: 13,
      cityId: 10,
      lng: 0,
      lat: 0
    })
      .then(res => {
        console.log(res);
        this.starsData = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    rankList("/api/show/myshow/ajax/rankList", {
      sellChannel: 13,
      cityId: 10,
      lng: 0,
      lat: 0
    })
      .then(res => {
        console.log(res);
        this.rankList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="scss">
.rushwidth {
  width: 100px;
}
.starswidth {
  width: 80px;
}
.lookwidth {
  width: 96px;
}
.recommendwidth {
  width: 160px;
}
.tody-rush {
  padding: 0 $base-space * 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.stars-news {
  padding: 0 $base-space;
  display: -webkit-box;
  overflow-x: auto;
  .item-con {
    padding-left: $base-space;
  }
  .info {
    color: $light-color;
    font-size: $font-size;
  }
}
.van-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: $base-space * 2;
  padding-right: $base-space * 2;
  padding-bottom: 59px;
  .time {
    color: $light-color;
    padding: $base-space * 0.4 0;
  }
  .price {
    font-size: $font-size * 1.8;
    color: $red-color;
    i {
      font-size: $font-size * 1.4;
    }
  }
}
</style>
<style lang="scss">
.home-lists {
  .van-list__error-text,
  .van-list__finished-text,
  .van-list__loading {
    width: 100%;
  }
}
</style>
