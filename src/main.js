
import "babel-polyfill";
import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters'
import ElementUI from 'element-ui'

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
//引入jquery
import $ from 'jquery'
import VueResource from 'vue-resource'


import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/common/css/common.css'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI)
Vue.use(VueResource)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

