import Vue from 'vue'
import App from './App.vue'
import router from './promition'
import Elementui from 'element-ui'
import Component from './components/index'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from './utils/axios.config'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Elementui)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
