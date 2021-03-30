import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//使用npm i element-ui -S 安装
//引入Element-ui
//element-ui样式引入
import 'element-ui/lib/theme-chalk/index.css';
//全局导入方式
// import ElementUI from 'element-ui';
//默认尺寸更改
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
//使用组件
// Vue.component(Button.name, Button);
// Vue.use(Select);

//element-ui文件夹下
import element from "./element-ui/index";
Vue.use(element);

//导入封装好的API
import api from './api/index'
Vue.prototype.$api = api
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
