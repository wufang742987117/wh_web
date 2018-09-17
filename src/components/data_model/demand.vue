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
          	<li>
          		<router-link to="/rescue">
          		物资及救援设施受损模型
          		</router-link>
          	</li>
          	<li class="active_li">
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
            <div id="Model_3" class="model_1"></div>
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
        let Model_3 = this.$echarts.init(document.getElementById('Model_3'));
	   
		let option = {
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				type: 'category',
				name:'供应量',
				boundaryGap: false,
				data: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
			},
			yAxis: {
				type: 'value',
				name:'满意度',
				max: 0.1,
			},
			series: [
				{
					name:'模型一',
					type:'line',
					stack: '总量',
					data:[0,0.01,0.016,0.02,0.04,0.05,0.06,0.07,0.08,0.09,0.1]
				},
				{
					name:'模型二',
					type:'line',
					stack: '总量',
					data:[0,0.01,0.016,0.019,0.02,0.023,0.028,0.03,0.035,0.04,0.05]
				}
			]
		};
	
		Model_3.setOption(option);
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
