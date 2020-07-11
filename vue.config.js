module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //设置文件路径
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        network: "@/network"
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        //设置全局的sass
        prependData: ` @import "@/assets/css/base.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      "/api/show": {
        target: "https://show.maoyan.com/maoyansh",
        changeOrigin: true,
        pathRewrite: {
          "^/api/show": ""
        }
      },
      "/api/shop": {
        target: "https://m.maoyan.com/mmall/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api/shop": ""
        }
      }
    }
  }
};
