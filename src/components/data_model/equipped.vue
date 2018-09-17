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
          	<li class="active_li">
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
          <el-col :span="12">
          	<div id="Model_4" class="basic_1"></div>
			<div style="margin: 10px 0;color: #fff;">洪水灾害救援</div>
          </el-col>
          <el-col :span="12">
          	<div id="Model_5" class="basic_1"></div>
			<div style="margin: 10px 0;color: #fff;">消防火灾救援</div>
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
        let Model_4 = this.$echarts.init(document.getElementById('Model_4'));
		let Model_5 = this.$echarts.init(document.getElementById('Model_5'));
	   
		let option_4 = {
			title : {
			  text: '',
			  x:'center'
			},
			tooltip : {
			  trigger: 'item',
			  formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
			  data: []
			},
			series : [
			  {
				type: 'pie',
				radius : '65%',
				center: ['50%', '50%'],
				data:[
				  {value:335, name:'头盔'},
				  {value:310, name:'雨衣丶雨伞'},
				  {value:234, name:'无线电通讯'},
				  {value:135, name:'救生衣'},
				  {value:1548, name:'其他'}
				],
				itemStyle: {
				  emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				  }
				}
			  }
			]
		};
		
		Model_4.setOption(option_4);
		
		let option_5 = {
			title : {
			text: '',
			x:'center'
			},
			tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
			data: []
			},
			series : [
			{
				name: '访问来源',
				type: 'pie',
				radius : '65%',
				center: ['50%', '50%'],
				data:[
				{value:335, name:'消防车'},
				{value:310, name:'破门锤'},
				{value:234, name:'其他'},
				{value:135, name:'喷水枪'}
				],
				itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
				}
			}
			]
		};
		
		Model_5.setOption(option_5);
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
