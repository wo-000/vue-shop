import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "lib-flexible"; //px转换rem

//vant组件使用
import {
  Button,
  Tabbar,
  Grid,
  Image as VanImage,
  GridItem,
  TabbarItem,
  List,
  PullRefresh,
  Lazyload,
  Toast,
  Overlay,
  Card,
  SubmitBar
} from "vant";
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(List);
Vue.use(GridItem);
Vue.use(Grid);
Vue.use(VanImage);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Overlay);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Lazyload, {
  lazyComponent: true,
  loading: require("assets/images/loading.gif")
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
