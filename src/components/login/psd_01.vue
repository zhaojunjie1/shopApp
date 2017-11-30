<template>
	<div id="app">
		<div class="header">
			<router-link to="/register"><p style="font-size: 18px;margin-left: 0.266666rem;">＜返回</p></router-link>
			<p style="font-size: 22px;margin-left: 2.473333rem;">找回密码</p>
		</div>
		<div class="main">
			<p>请输入您的手机号码</p>
			<input type="phone" placeholder="手机号" />
			<button id="btn">下一步</button>
			<button id="btn1">联系客服</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.header{
		width:100%;
		height:1.173333rem;
		background: #ca3232;
	}
	.header p{
		float: left;
		color: white;
		line-height: 1.173333rem;
	}
	.main{
		width:100%;
		height:16.08rem;
	}
	.main p{
		margin-left: 2.64rem;
		font-size: 22px;
		margin-top: 1.906666rem;
	}
	.main input{
		width:85%;
		height: 1.866666rem;
		outline: none;
		border: none;
		border-bottom: 1px solid #dddddd;
		text-align: center;
		font-size: 20px;
		margin-left: 0.666666rem;
		margin-top: 0.8rem;
	}
	.main #btn{
		width:80%;
		height:1.2rem;
		background: #ca3232;
		border: none;
		outline: none;
		border-radius: 10px;
		margin-top: 1.426666rem;
		margin-left: 1.066666rem;
		color: white;
		font-size: 22px;
		font-weight: 100;
	}
	.main #btn1{
		width:80%;
		height:1.2rem;
		background: white;
		border: none;
		outline: none;
		border-radius: 10px;
		margin-top: 0.666666rem;
		margin-left: 1.066666rem;
		color: #ca3232;
		font-size: 22px;
		font-weight: 100;
		border: 1px solid #ca3232;
	}
</style>