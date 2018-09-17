<template>
  <el-container>
    <!--头部-->
    <el-header>
      <header-black></header-black>
    </el-header>

    <!--内容-->
    <el-main>
      <el-row>
        <el-col :span="12">
          <div class="charts">
            <div id="myChart_wuhuMap"></div>

          </div>
        </el-col>
        <el-col :span="12">
          <el-col :span="24">
							<div id="Chart_2">
								
							</div>
          </el-col>
          <el-col :span="24">
							<div id="Chart_3"></div>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>




</template>

<script>
  import HeaderBlack from '@/components/population_structure/headerBlack'
	
	let echarts = require('echarts');

  export default {
    data () {
      return {
      }
    },
    components:{HeaderBlack},
    mounted(){
      let myChart = echarts.init(document.getElementById('myChart_wuhuMap'));
      // myChart.setOption(options)
			
      myChart.showLoading();
			this.$http.get('../../../static/data/WUHU.json').then(res => {
					myChart.hideLoading();
					let geoJson = res.body;
					echarts.registerMap('HK', geoJson);
					let option = {
					title: {
						text: '芜湖人口密度',
						left:'center',
						top:'bottom',
						textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontFamily: 'Arial, Verdana, sans...',
								color:'#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b}<br/>{c} (p / km2)'
					},
					toolbox: {
						show: false,
						orient: 'vertical',
						left: 'right',
						top: 'center',
						feature: {
							dataView: {readOnly: false},
							restore: {},
							saveAsImage: {}
						}
					},
					visualMap: {
						min: 800,
						max: 50000,
						text:['最大值','最小值'],
						realtime: false,
						calculable: true,
						inRange: {
							color: ['#ade93c','yellow', '#d4032b']
						},
						left:'10%',
						textStyle:{
								color:'#fff'
						}
					},
					series: [
						{
							name: '人口密度',
							type: 'map',
							mapType: 'HK', // 自定义扩展图表类型
							itemStyle:{
								normal:{label:{show:true}},
								emphasis:{label:{show:true}}
							},
							data:[
								{name: '繁昌县', value: 20057.34},
								{name: '镜湖区', value: 15477.48},
								{name: '南陵县', value: 31686.1},
								{name: '三山区', value: 6992.6},
								{name: '无为县', value: 44045.49},
								{name: '芜湖县', value: 40689.64},
								{name: '弋江区', value: 37659.78},
								{name: '鸠江区', value: 45180.97}
							]
						}
					]
				};
				myChart.setOption(option);
				
				let myChart_sex = echarts.init(document.getElementById('Chart_2'));
				let option_sex = {
					color: ['#fff', '#FF9800', '#8BC34A'],
					title: {
						text: '人群结构',
						left:'center',
						top:'bottom',
						textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
								fontFamily: 'Arial, Verdana, sans...',
								color:'#fff',
								fontStyle: 'normal',
								fontWeight: 'normal',
						},
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: { //图例信息
						data: [ '男','女'],
						top: 'top', //图例位置（可设置top,bottom,left,right）
						textStyle: {
							color: '#fff'
						}
					},
					grid: {
							right: '10%'
					},
					xAxis: {
						name:'类型',
						type: 'category',
						data: ['镜湖区','三山区','弋江区','无为县','繁昌县','鸠江区','芜湖县','南陵县'],
						axisLine:{
							lineStyle:{
								color:'#fff',
								width:1,//这里是为了突出显示加上的
							}
						},
						
					},
					yAxis: {
						name: '人口',
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
							name:'男',
							type:'bar',
							data:[80000, 20000, 30000, 29000,19000,27800,50990,70189],
							barWidth:20,
							// barGap:10
						},
						{
							name:'女',
							type:'bar',
							data:[50000, 10000, 23000, 19000,23000,17800,30990,20189],
							barWidth:20,
							// barGap:10
						}
					]
				};
				myChart_sex.setOption(option_sex);
				
				
				let myChart_area = echarts.init(document.getElementById('Chart_3'));
				let option_area = {
					color: ['#fff', '#FF9800', '#8BC34A'],
					title: {
						text: '人群分布',
						left:'center',
						top:'bottom',
						textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
								fontFamily: 'Arial, Verdana, sans...',
								color:'#fff',
								fontStyle: 'normal',
								fontWeight: 'normal',
						},
					},
					tooltip: {
						trigger: 'axis'
					},
					grid: {
							right: '10%'
					},
					xAxis: {
						name:'类型',
						type: 'category',
						data: ['镜湖区','三山区','弋江区','无为县','繁昌县','鸠江区','芜湖县','南陵县'],
						axisLine:{
							lineStyle:{
								color:'#fff',
								width:1,//这里是为了突出显示加上的
							}
						},
						
					},
					yAxis: {
						name: '人口',
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
							name:'人口总数',
							type:'bar',
							data:[100000, 80000, 33000, 49000,59000,37800,20990,40189],
							barWidth:40,
							// barGap:10
						}
					]
				};
				myChart_area.setOption(option_area);
				
			})

//       $.get('../data/WUHU.json', function (geoJson) {
// 				debugger;
//         myChart.hideLoading();
// 
//         echarts.registerMap('WUHU', geoJson);
// 
//         myChart.setOption(option = {
//           title: {
//             text: '香港18区人口密度 （2011）',
//             subtext: '人口密度数据来自Wikipedia',
//             sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
//           },
//           tooltip: {
//             trigger: 'item',
//             formatter: '{b}<br/>{c} (p / km2)'
//           },
//           toolbox: {
//             show: true,
//             orient: 'vertical',
//             left: 'right',
//             top: 'center',
//             feature: {
//               dataView: {readOnly: false},
//               restore: {},
//               saveAsImage: {}
//             }
//           },
//           visualMap: {
//             min: 800,
//             max: 50000,
//             text:['High','Low'],
//             realtime: false,
//             calculable: true,
//             inRange: {
//               color: ['lightskyblue','yellow', 'orangered']
//             }
//           },
//           series: [
//             {
//               name: '香港18区人口密度',
//               type: 'map',
//               mapType: 'HK', // 自定义扩展图表类型
//               itemStyle:{
//                 normal:{label:{show:true}},
//                 emphasis:{label:{show:true}}
//               },
//               data:[
//                 {name: '中西区', value: 20057.34},
//                 {name: '湾仔', value: 15477.48},
//                 {name: '东区', value: 31686.1},
//                 {name: '南区', value: 6992.6},
//                 {name: '油尖旺', value: 44045.49},
//                 {name: '深水埗', value: 40689.64},
//                 {name: '九龙城', value: 37659.78},
//                 {name: '黄大仙', value: 45180.97},
//                 {name: '观塘', value: 55204.26},
//                 {name: '葵青', value: 21900.9},
//                 {name: '荃湾', value: 4918.26},
//                 {name: '屯门', value: 5881.84},
//                 {name: '元朗', value: 4178.01},
//                 {name: '北区', value: 2227.92},
//                 {name: '大埔', value: 2180.98},
//                 {name: '沙田', value: 9172.94},
//                 {name: '西贡', value: 3368},
//                 {name: '离岛', value: 806.98}
//               ],
//               // 自定义名称映射
//               nameMap: {
//                 'Central and Western': '中西区',
//                 'Eastern': '东区',
//                 'Islands': '离岛',
//                 'Kowloon City': '九龙城',
//                 'Kwai Tsing': '葵青',
//                 'Kwun Tong': '观塘',
//                 'North': '北区',
//                 'Sai Kung': '西贡',
//                 'Sha Tin': '沙田',
//                 'Sham Shui Po': '深水埗',
//                 'Southern': '南区',
//                 'Tai Po': '大埔',
//                 'Tsuen Wan': '荃湾',
//                 'Tuen Mun': '屯门',
//                 'Wan Chai': '湾仔',
//                 'Wong Tai Sin': '黄大仙',
//                 'Yau Tsim Mong': '油尖旺',
//                 'Yuen Long': '元朗'
//               }
//             }
//           ]
//         });
//       });
//     }
// 

  }}
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
