import {debounce} from 'assets/js/until.js'; //事件防抖
import Vue from "vue";
import Axios from "axios";
import { Toast } from "vant";
Vue.prototype.$axios = Axios;


export function request(config) {
  var instance = Axios.create({
    timeout: 5000
  });
  //请求拦截
  instance.interceptors.request.use(
    function(config) {
      debounce(()=>{Toast.loading({
        message: '加载中...',
        forbidClick: true,
      })},500)()
      
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    function(res) {
      return res.data;
    },
    function(err) {
      return Promise.reject(err);
    }
  );

  return instance(config); //instance()  返回的是一个Promise;
}
