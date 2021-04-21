import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customers from './components/Customers.vue'
import About from './components/About.vue'
import VueResource from 'vue-resource'
import Add from './components/add.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
//设置路由
const router=new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    {path:"/customer/:id",component:CustomerDetails},
    {path:"/edit/:id",component:Edit}
  ]
})

new Vue({
  router,
  // template:'<div id="cpp"><router-link to="/about">关于</router-link></div>',
  render: h => h(App),
}).$mount('#app')
