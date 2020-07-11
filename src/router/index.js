import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/home/Home.vue");
const Shop = () => import("../views/shop/Shop.vue");
const Carts = () => import("../views/carts/Carts.vue");
const Profile = () => import("../views/profile/Profile.vue");
const ShopDetail = () => import("../views/shopdetail/ShopDetail.vue");

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: Home,
    component: Home
  },
  {
    path: "/shop",
    name: Shop,
    component: Shop
  },
  {
    path: "/carts",
    name: Carts,
    component: Carts
  },
  {
    path: "/profile",
    name: Profile,
    component: Profile
  },
  {
    path: "/shopdetail/:id",
    name: ShopDetail,
    component: ShopDetail
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0;
  next();
});
export default router;
