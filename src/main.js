import Vue from 'vue'
import App from './App'
import router from './router'

// 引入mui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 引入mui樣式
import "./assets/mui/css/mui.css"
import "./assets/mui/css/icons-extra.css"

import  store from "./store"

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store

})
