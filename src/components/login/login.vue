<template>
	<div id="app">
		<div class="main">
			<img class="img1" src="../../assets/img/111.jpg" />
		    <button id="btn">微信一键登录</button>
			<router-link to="/register"><button id="btn1">登录</button></router-link>
			<router-link to="/zhuce"><button id="btn2">新用户</button></router-link>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'app',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  }
	}
</script>

<style scoped="scoped">
	.img1{
		width: 100%;
	}
	#btn{
		position: fixed;
		bottom: 25%;
		width:90%;
		height: 50px;
		left: 5%;
		border-radius: 5px;
		background: #00a80c;
		border: none;
		color: white;
		font-size: 16px;
	}
	#btn1{
		position: fixed;
		bottom: 15%;
		left: 5%;
		background: white;
	    width: 155px;
        height: 45px;
        font-size: 16px;
        border-radius: 10px;
		border: none;
		outline: none;
		color: #ca3232;
	}
	#btn2{
		position: fixed;
		bottom: 15%;
		right: 5%;
		background: none;
		width: 155px;
        height: 45px;
		border-radius: 10px;
		outline: none;
		color: white;
		font-size: 16px;
		border: 1px solid white;
	}

</style>