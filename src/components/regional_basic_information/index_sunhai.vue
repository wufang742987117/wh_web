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
          	<li>
          		<router-link to="/regional_index_jichu">
          		地区基础设施
          		</router-link>
          	</li>
          	<li class="active_li">
          		<router-link to="/regional_index_sunhai">
          		地区损害条件
          		</router-link>
          	</li>
          </ul>
        </el-col>
        <el-col :span="20">
          <el-col :span="12">
            <div id="main_fangwu" class="basic_1"></div>
            <div style="margin: 10px 0;color: #fff;">城镇房屋损毁情况统计</div>
          </el-col>
          <el-col :span="12">
            <div id="main_renyuan" class="basic_1"></div>
            <div style="margin: 10px 0;color: #fff;">人员健康情况</div>
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
      let myChart_fangwu = this.$echarts.init(document.getElementById('main_fangwu'));
      let myChart_renyuan = this.$echarts.init(document.getElementById('main_renyuan'));

      // 指定图表的配置项和数据
      let option1 = {
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
              {value:231, name:'工业与民用建筑'},
              {value:1, name:'机场'},
              {value:22, name:'大坝'},
              {value:60, name:'桥梁'},
              {value:33, name:'隧道'},
              {value:2, name:'码头'},
              {value:102, name:'其他'}
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
      let option2 = {
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
              {value:131, name:'躯体化'},
              {value:12, name:'精神抑郁'},
              {value:32, name:'强迫'},
              {value:60, name:'焦虑'},
              {value:313, name:'外伤'},
              {value:202, name:'其他精神疾病'}
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

      // 使用刚指定的配置项和数据显示图表。
      myChart_fangwu.setOption(option1);
      myChart_renyuan.setOption(option2);

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
