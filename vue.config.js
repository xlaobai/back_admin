// vue.config.js
module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log('pro');
    } else {
      // 为开发环境修改配置...
      console.log('env');
      config.devtool('eval-source-map').cache(false);
    }
  }
}