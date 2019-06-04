import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css"
Vue.config.productionTip = false

Vue.use(Antd)

import router from './router/router.js'


new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
