<template>
  <el-form ref="AccountFrom"   label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="params.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="params.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
			<a href="/" style="font-weight: bold;"><返回首页</a>
    </el-form-item>
  </el-form>
</template>

<script>
	import store from 'store'
  export default {
    data () {
      return {
					params:{
						username:'',
						pwd:''
					},
					username:'admin',
					password:'admin'
      }
    },
    created(){
      
    },
    methods: {
				login() {
						let _this = this;
						if(_this.params.username==_this.username&&_this.params.pwd==_this.password){
							store.set('_TOKEN__', 'login')
							_this.$router.push({ path: '/population_structure' })
						}
						else
						_this.$message('登录错误');
				}
    }
  }
</script>
<style>
  body {
		
    /*background: #000;*/
  }
	
</style>
<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #aab4be;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    background: -ms-linear-gradient(top, #ace, #00C1DE);
    background: -moz-linear-gradient(top, #ace, #00C1DE);
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE));
    background: -webkit-linear-gradient(top, #ace, #00C1DE);
    background: -o-linear-gradient(top, #ace, #00C1DE);

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
