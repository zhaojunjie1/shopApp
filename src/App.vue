<template>
  <div id="app">
    
    <router-view></router-view>
    
    
    
  </div>
</template>

<script>
	
	import login from './components/login/login.vue'
	
	
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	"logins":login
  }
}
</script>

<style>
	
</style>
