<template>

  <el-row>
    <el-col :span="3">
      <a href="/"><img class="btn_icon" src="../../assets/header/home.png"/>回到首页</a>
    </el-col>
    <el-col :span="10" :offset="5">
      <el-col :span="6">
				<router-link to="/population_structure" v-if="type!=='/population_structure'">
					<img class="btn_icon" src="../../assets/header/crowd.png"/><span>人群结构</span>
				</router-link>
				<router-link to="/population_structure" v-if="type=='/population_structure'">
					<img class="btn_icon" src="../../assets/header/crowd_active.png"/><span style="color:#ff9800;">人群结构</span>
				</router-link>
      </el-col>
      <el-col :span="6">
				<router-link to="/regional_basic_information" v-if="type!=='/regional_basic_information'&&type!=='/regional_index_jichu'&&type!='/regional_index_sunhai'">
					<img class="btn_icon" src="../../assets/header/region.png"/>地区基础信息
				</router-link>
				<router-link to="/regional_basic_information" v-if="type=='/regional_basic_information'||type=='/regional_index_jichu'||type=='/regional_index_sunhai'">
					<img class="btn_icon" src="../../assets/header/region_active.png"/><span style="color:#ff9800;">地区基础信息</span>
				</router-link>
      </el-col>
<!--      <el-col :span="6">
        <a href="#"><img class="btn_icon" src="../../assets/header/loss.png"/>灾害损失</a>
      </el-col> -->
      <el-col :span="6">
				<router-link to="/casualty" v-if="type!=='/casualty'&&type!=='/tran_condition'&&type!=='/rescue'&&type!=='/demand'&&type!=='/equipped'&&type!=='/casualty_info'">
        <img class="btn_icon" src="../../assets/header/data.png"/>数据模型
				</router-link>
				<router-link to="/casualty" v-if="type=='/casualty'||type=='/tran_condition'||type=='/rescue'||type=='/demand'||type=='/equipped'||type=='/casualty_info'">
				<img class="btn_icon" src="../../assets/header/data_active.png"/><span style="color:#ff9800;">数据模型</span>
				</router-link>
      </el-col>
    </el-col>
    <el-col :span="4" :offset="2">
      <el-col :span="12">admin</el-col>
      <el-col :span="12"><a href="" @click="gout">退出</a></el-col>
    </el-col>
  </el-row>

</template>

<script>
		import store from 'store'
    export default {
        name: "header-black",
				data () {
					return {
						type:''
					}
				},
				mounted(){
						this.type = this.$route.path;
				},
				methods: {
					gout() {
						let _this = this;
						_this.$router.push({ path: '/' });
						store.remove('_TOKEN__');
					}
				}
    }
</script>

<style scoped>
  a{
    color: #fff !important;
    display: block;
  }
  .btn_icon{
    width: 25px;
    position: relative;
    top: 3px;
    right: 5px;
  }
</style>
