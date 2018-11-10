// vue.config.js
module.exports = {
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
		} else {
			// 为开发环境修改配置...
			console.log('dev');
			config.devtool('eval-source-map').cache(false);

			//关不eslint验证
			const eslRule = config.module.rule('eslint');
			eslRule.uses.clear();

			return {
				
			}
		}
	},

	devServer: {
		proxy: {
			'/proxy': {
		        target: 'http://xlaobai.cn:8082/',//设置你调用的接口域名和端口号 
		        changeOrigin: true,     //跨域
		        pathRewrite: {
		          '^/proxy': '/'          //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
		        }
		     }
		}
	}
}