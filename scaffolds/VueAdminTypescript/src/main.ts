import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import '@/styles/index.scss'
import '@/icons'

import './plugins/element'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
