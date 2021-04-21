import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './router'



Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令
// Vue.directive('rainbow',{
  //bind(el,binding,vnode) 如果binding,vnode不使用不用写出来，如果写出来会报错
//   bind(el){
//     el.style.color='#'+Math.random().toString(16).slice(2,8); //每个title的颜色会不一样，每次刷新title颜色也不一样
//   }
// })

 Vue.directive('theme',{
   bind(el,binding){
    if(binding.value=='wide'){     //传入wide参数
      el.style.maxWidth='1260px'
    }
    if(binding.value=='narrow'){   //传入narrow指令值
      el.style.maxWidth='560px'
    }
    if(binding.arg=='column'){     //column指令参数
      el.style.background="#6677cc";
      el.style.padding='20px';
    }
  }
 })

 //自动义过滤器
//  Vue.filter("to-uppercase",function(value){
//    return value.toUpperCase();
//  })

 Vue.filter("snippet",function(value){
   return value.slice(0,100)+"...";
 })

 //创建路由
 const router=new VueRouter({
   routes:Routes,
   mode:"history"
 })

// Vue.directive('theme',{
//   bind(el,binding){
//     if(binding.value=='narrow'){  //传入narrow参数
//       el.style.maxWidth='560px'
//     }
//   }
// })



new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
