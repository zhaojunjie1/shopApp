import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"
Vue.use(VueRouter)

import zhuce from './components/login/zhuce.vue';
import register from './components/login/register.vue';
import login from './components/login/login.vue'
let router = new VueRouter({
	routes:[
		{path:'/',component:login},
		{path:'/zhuce',component:zhuce},
		{path:'/register',component:register},
		{path:"/login",component:login}
	]
})


new Vue({
  el: '#app',
	router:router,
  render: h => h(App)
})
