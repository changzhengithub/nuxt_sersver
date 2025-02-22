export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt预渲染',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'Nuxt' },
      { hid: 'description', name: 'description', content: '这是一个Nuxt应用程序' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // 全局CSS/LESS/SCSS引入
  css: [
    // 'ant-design-vue/dist/antd.less'
    '@/assets/css/reset.css',
    '@/assets/less/main.less',
    '@/assets/less/theme.less'
  ],

  // 引入插件
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios', // 配置@nuxtjs/axios的接口请求插件
    '@/plugins/swiper'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  server: {
    port: 8000,
    host: '0.0.0.0'
  },

  // 中间件
  router: {
    middleware: 'auth'
  },

  // nuxt内置模块
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // nuxt自带的axios请求模块
    // '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],

  // Axios 模块设置
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://jsonplaceholder.typicode.com',
    // 是否开启代理
    // proxy: true
  },

  // 跨域设置
  // proxy: {
  //   '/api': {
  //     target: 'https://api.sec.yunsee.cn' // 目标接口域名
  //   }
  // },

  // less配置
  styleResources: {
    less: ['@/assets/less/_flex.less', '@/assets/less/_common.less', '@/assets/less/theme.less']
  },

  // 构建配置，自定义 webpack 的构建配置
  build: {
    loaders: {
      less: {
        lessOptions: { // less-loader 5.x以上才有 lessOptions , 5.x 以下直接配置
          javascriptEnabled: true
        }
      }
    }
  }
}
