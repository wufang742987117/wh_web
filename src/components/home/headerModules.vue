<template>

  <el-header>
    <el-row>
      <el-col :span="8">
        <a href="/"><img style="width: 100%;vertical-align: middle;" src="../../assets/logo.png"></a>
      </el-col>
      <el-col :span="4" :offset="4">
        <el-menu :default-active="activeIndex" class="el-menu-demo header-tab" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">灾害系统</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" class="search_btn">
        <el-input placeholder="请输入搜索关键词" v-model="search_val">
          <el-button type="primary" slot="append">搜索</el-button>
        </el-input>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
		 import store from 'store'
		
    export default {
      name: "HeaderModules",
      data () {
        return {
          activeIndex: '1',
          search_val: '',
        }
      },
			mounted(){
				console.log(this.$router.history.current.path);
				if(this.$router.history.current.path=='/information_details') {
					this.activeIndex = '3';
				}
			},
      methods: {
        handleSelect(key, keyPath) {
					let _this = this;
          console.log(key, keyPath);
					if(key=='2') {
							if(store.get('_TOKEN__')){
								_this.$router.push({ path: '/population_structure' });
							}
							else {
								_this.$router.push({ path: '/login' });
							}
					}
					else {
						_this.$router.push({ path: '/' });
					}
        },
      }
    }
</script>

<style scoped>

</style>
