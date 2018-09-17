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
						<li>
							<router-link to="/casualty_info">
							灾害损失模型
							</router-link>
						</li>
          </ul>
        </el-col>
        <el-col :span="20">
          <el-col :span="24">
            <div id="Model_1" class="model_1"></div>
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
        let Model_1 = this.$echarts.init(document.getElementById('Model_1'));
	    let data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

		var dateList = data.map(function (item) {
			return item[0];
		});
		var valueList = data.map(function (item) {
			return item[1];
		});

		let option = {

			// Make gradient line here
			visualMap: [{
				show: false,
				type: 'continuous',
				seriesIndex: 0,
				min: 0,
				max: 400
			}],
			tooltip: {
				trigger: 'axis'
			},
			xAxis: [{
				data: dateList,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#000'
					}
				}
			}],
			yAxis: [{
				splitLine: {show: false},
				axisLabel : {
					textStyle: {
						color: '#000'
					}
				}
			}],
			series: [{
				type: 'line',
				showSymbol: false,
				data: valueList
			}]
		};
		Model_1.setOption(option);
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
