import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
export default {
  install: function (Vue) {
    Vue.component('layout-header', layoutHeader)
    Vue.component('layout-aside', layoutAside)
  }
}
