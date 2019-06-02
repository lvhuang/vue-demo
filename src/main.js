import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import router from './router/router.js'
import "ant-design-vue/dist/antd.css"

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
