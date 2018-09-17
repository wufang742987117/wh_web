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
            <li class="active_li">
							<router-link to="/regional_basic_information">
							地区交通运输条件
							</router-link>
						</li>
            <li>
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
            <div id="main_ganghang" class="basic_1"></div>
            <div style="margin: 10px 0;color: #fff;">芜湖市港航管理</div>
          </el-col>
          <el-col :span="12">
            <div id="main_gonglu" class="basic_1" ></div>
            <div style="margin: 10px 0;color: #fff;">芜湖市公路管理局</div>
          </el-col>
          <el-col :span="12" style="margin-top: 20px;">
            <div id="main_daolu" class="basic_1" ></div>
            <div style="margin: 10px 0;color: #fff;">芜湖市道路运输管理处</div>
          </el-col>
          <el-col :span="12" style="margin-top: 20px;">
            <div id="main_gongjiao" class="basic_1"></div>
            <div style="margin: 10px 0;color: #fff;">芜湖市公共交通集团有限责任公司</div>
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
      let myChart_ganghang = this.$echarts.init(document.getElementById('main_ganghang'));
      let myChart_gonglu = this.$echarts.init(document.getElementById('main_gonglu'));
      let myChart_daolu = this.$echarts.init(document.getElementById('main_daolu'));
      let myChart_gongjiao = this.$echarts.init(document.getElementById('main_gongjiao'));

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
              {value:335, name:'水上交通政务'},
              {value:310, name:'港航工程'},
              {value:634, name:'镜湖港航'},
              {value:135, name:'弋江港航'},
              {value:656, name:'鸠江港航'},
              {value:235, name:'三山港航'},
              {value:110, name:'无为县港航'},
              {value:434, name:'芜湖县港航'},
              {value:135, name:'繁昌县港航'},
              {value:348, name:'南陵县港航'}
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
              {value:25, name:'市直属分局'},
              {value:18, name:'无为分局'},
              {value:34, name:'芜湖分局'},
              {value:15, name:'南陵分局'},
              {value:20, name:'繁昌分局'}
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
      let option3 = {
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
              {value:125, name:'办公室'},
              {value:18, name:'政工科'},
              {value:324, name:'执法（安全）监督科'},
              {value:105, name:'行政审批科'},
              {value:20, name:'客运管理科'},
              {value:65, name:'货运管理科'},
              {value:58, name:'机动车维修管理科'},
              {value:54, name:'综合规划科'},
              {value:15, name:'源头治超办公室'},
              {value:20, name:'运政处罚办公室'}
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
      let option4 = {
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
              {value:205, name:'综合科'},
              {value:110, name:'工程科'},
              {value:124, name:'路政科'}

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
      myChart_ganghang.setOption(option1);
      myChart_gonglu.setOption(option2);
      myChart_daolu.setOption(option3);
      myChart_gongjiao.setOption(option4);

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
