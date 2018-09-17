<template>
  <el-container>
    <!--头部-->
    <el-header>
      <header-black></header-black>
    </el-header>

    <el-main style="margin-top: 40px;">
      <el-row>
        <el-col :span="4">
          <ul class="black-ul">
          	<li>
          		<router-link to="/casualty">
          		突发事件人员伤亡模型
          		</router-link>
          	</li>
          	<li>
          		<router-link to="/tran_condition">
          		交通运输条件受损模型
          		</router-link>
          	</li>
          	<li class="active_li">
          		<router-link to="/rescue">
          		物资及救援设施受损模型
          		</router-link>
          	</li>
          	<li>
          		<router-link to="/demand">
          		物资及条件配备需求模型
          		</router-link>
          	</li>
          	<li>
          		<router-link to="/equipped">
          		救援人员配备需求模型
          		</router-link>
          	</li>
          	<li>
          		<router-link to="/casualty_info">
          		灾害损失模型
          		</router-link>
          	</li>
          </ul>
        </el-col>
        <el-col :span="20">
          <el-col :span="24">
            <div id="Model_2" class="model_1"></div>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderBlack from '@/components/population_structure/headerBlack'

  export default {
    data () {
      return {
      }
    },
    components:{HeaderBlack},
    mounted(){
        let Model_2 = this.$echarts.init(document.getElementById('Model_2'));
	   
		let option = {
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				name:'时间'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			yAxis: {
				type: 'value',
				name:'受损情况'
			},
			series: [{
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				type: 'line',
				areaStyle: {}
			}]
		};
		Model_2.setOption(option);
    }
  }
</script>

<style scoped>
  .el-container{
    background-color: #000;
    color: #fff !important;
    font-size: 14px;
    min-height: 100vh;
  }
  .el-header{
    color: #fff !important;
  }




</style>
