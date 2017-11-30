<template>
	<div>
		<header>
			<span id="span"><router-link to="/login"><span class="glyphicon glyphicon-menu-left"></span>返回</router-link></span>
			<img src="../../assets/img/register_img.png"/>
		</header>
		<div class="login">
			<div class="left"><router-link to="/register">登录</router-link><div id="s"></div></div>
			<div class="right"><router-link to="/zhuce">注册</router-link></div>
		</div>
		<div class="form">
			<span class="glyphicon glyphicon-phone"></span>
			<input type="text" value="请输入手机号"/>
		</div>
		<div class="form">
			<span class="glyphicon glyphicon-lock"></span>
			<input type="text" value="请输入密码"/>
		</div>
		<div class="btn">
			<button class="btn btn-danger">登录</button>
		</div>
		<!--<p class="p"><router-link to="/pwd1">忘记密码?</router-link></p>-->
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	}
	header{
		width: 100%;
		height:auto;
	}
	header img{
		width: 100%;
		height:auto;
	}
	header #span{
		position: absolute;
		left: 3%;
		top: 3%;
	}
	header span a{
		color: white;
	}
	.login{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: #f3f3f3;
		display: flex;
	}
	.login a{
		color: #bbbbbb;
	}
	.left,.right{
		width: 50%;
		text-align: center;
		color: #bbbbbb;
	}
	.left a{
		color: #777777;
	}
	.left{
		position: relative;	
	}
	.form{
		width: 84%;
		height: 45px;
		/*background: pink;*/
		margin:0 auto;
		margin-top: 32px;
		border-bottom: 1px solid #dddddd;
		color: #bbbbbb;
	}
	.form input{
		height: 40px;
		text-align: center;
		border: none;
		width:88%;
	}
	.form span{
		color: #bbbbbb;
		font-size: 20px;
		margin-left: 5px;
	}
	.btn{
		width: 100%;
		margin-top: 22px;
	}
	.btn button{
		width: 84%;
		height: 45px;
	}
	.p{
		text-align: center;
		margin-top: 25px;
	}
	.p a{
		color: #6B6B6B
	}
	#s{
		width: 0px;
		height: 0px;
		border-left:6px solid transparent;
		border-right:6px solid transparent;
		border-bottom: 11px solid white;
		position: absolute;
		left: 47%;
		bottom: 0%;
	}

</style>