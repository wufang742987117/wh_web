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
          		<router-link to="/regional_basic_information">
          		地区交通运输条件
          		</router-link>
          	</li>
          	<li class="active_li">
          		<router-link to="/regional_index_jichu">
          		地区基础设施
          		</router-link>
          	</li>
          	<li>
          		<router-link to="/regional_index_sunhai">
          		地区损害条件
          		</router-link>
          	</li>
          </ul>
        </el-col>
        <el-col :span="20">
          <el-col :span="12">
            <div id="main_mall" class="basic_2"></div>
            <div style="margin: 10px 0;color: #fff;">大型商城及超市分布</div>
          </el-col>
          <el-col :span="12">
            <div id="main_hospital" class="basic_2"></div>
            <div style="margin: 10px 0;color: #fff;">医院分布</div>
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
      // 基于准备好的dom，初始化echarts实例
      let myChart_mall = this.$echarts.init(document.getElementById('main_mall'));
      let myChart_hospital = this.$echarts.init(document.getElementById('main_hospital'));

      // 指定图表的配置项和数据
      let option_mall = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: { //图例信息
          data: [ '弋江区','无为县','繁昌县','南陵县','镜湖区','鸠江区','芜湖县','三山区'],
          top: 'top', //图例位置（可设置top,bottom,left,right）
          textStyle: {
            color: '#fff'
          }
        },
				grid:{
					top:'20%'
				},
        xAxis: {
          type: 'category',
          data: ['0-2km','2-4km','4-6km','6-8km'],
          axisLine:{
            lineStyle:{
              color:'#fff',
              width:1,//这里是为了突出显示加上的
            }
          }
        },
        yAxis: {
          name: '个/km2',
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 1,//这里是为了突出显示加上的
            }
          }
        },
        series: [
          {
            name:'弋江区',
            type:'line',
            data:[5, 5, 7, 8]
          },
          {
            name:'无为县',
            type:'line',
            data:[9, 7, 8, 6]
          },
          {
            name:'繁昌县',
            type:'line',
            data:[2, 2, 4, 4]
          },
					{
						name:'南陵县',
						type:'line',
						data:[3, 1, 4, 2]
					},
					{
						name:'镜湖区',
						type:'line',
						data:[3, 5, 1, 3]
					},
					{
						name:'鸠江区',
						type:'line',
						data:[3, 3, 2, 6]
					},
					{
						name:'三山区',
						type:'line',
						data:[1, 2, 2, 1]
					}
        ]
      };

      let option_hospital = {
        color: ['#fff', '#FF9800', '#8BC34A'],
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: { //图例信息
          data: [ '三甲','三乙','其他'],
          top: 'top', //图例位置（可设置top,bottom,left,right）
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          type: 'category',
          data: ['弋江区','无为县','繁昌县','南陵县','镜湖区','鸠江区','芜湖县','三山区'],
          axisLine:{
            lineStyle:{
              color:'#fff',
              width:1,//这里是为了突出显示加上的
            }
          }
        },
        yAxis: {
          name: '个',
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 1,//这里是为了突出显示加上的
            }
          }
        },
        series: [
          {
            name:'三甲',
            type:'bar',
            data:[1, 2, 3, 4,6,2,1,3]
          },
          {
            name:'三乙',
            type:'bar',
            data:[5, 5, 7, 3,2,1,3,1]
          },
          {
            name:'其他',
            type:'bar',
            data:[9, 7, 8, 5,1,2,3,1]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart_mall.setOption(option_mall);
      myChart_hospital.setOption(option_hospital);

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
