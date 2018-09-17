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
          	<li  class="active_li">
          		<router-link to="/casualty_info">
          		灾害损失模型
          		</router-link>
          	</li>
          </ul>
        </el-col>
        <el-col :span="20">
          <el-col :span="24">
            <div id="Model_6" class="model_2"></div>
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
        let Model_6 = this.$echarts.init(document.getElementById('Model_6'));
	   
		let option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
			},
			legend: {
				data:['蒸发量','降水量','平均温度']
			},
			xAxis: [
				{
					type: 'category',
					data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
					axisPointer: {
						type: 'shadow'
					}
				}
			],
			yAxis: [
				{
					type: 'value',
					name: '水量',
					min: 0,
					max: 250,
					interval: 50,
					axisLabel: {
						formatter: '{value} ml'
					}
				},
				{
					type: 'value',
					name: '温度',
					min: 0,
					max: 25,
					interval: 5,
					axisLabel: {
						formatter: '{value} °C'
					}
				}
			],
			series: [
				{
					name:'蒸发量',
					type:'bar',
					data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				},
				{
					name:'降水量',
					type:'bar',
					data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,2.6, 5.9, 91.0, 26.4, 218.7, 7.7, 15.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				},
				{
					name:'平均温度',
					type:'line',
					yAxisIndex: 1,
					data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,2.0, 20.2, 13.3, 22.5, 16.3, 1.2, 20.3, 23.4, 13.0, 6.5, 2.0, 6.2]
				}
			]
		};
		Model_6.setOption(option);
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
