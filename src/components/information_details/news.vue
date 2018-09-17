<template>
    <el-container>
      <header-modules></header-modules>
      <el-main>
        <el-row class="breadcrumb_li">
          <el-col :span="20" :offset="2">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item><a href="/">位置：首页</a></el-breadcrumb-item>
              <el-breadcrumb-item>鄂湘风雹洪涝灾致1人死亡</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="20" :offset="2">
            <el-col :span="24">
              <div style="position: relative;">
                <h1 class="info_title">鄂湘风雹洪涝灾致1人死亡</h1>
              </div>
            </el-col>
            <el-col :span="24">
              <pre>来源： 国家减灾中心  时间：2018-09-07 11:42:38</pre>
            </el-col>
            <el-col :span="24" class="info_content">
              <p>9月5日以来，湖北、湖南部分地区出现强降雨，局地还伴有雷暴、大风、冰雹等强对流天气，其中，6日，湖南中南部、湖北西南部等地出现分散性暴雨或大暴雨，上述地区最大小时降雨量60—87毫米，引发风雹洪涝灾害，造成部分房屋进水或损坏，玉米和部分经济作物受灾，交通等基础设施受损。截至9月7日10时统计，上述2省3市（自治州）5个县（市）4.3万人受灾，1人死亡，100余人紧急转移安置；200余间房屋不同程度损坏；农作物受灾面积3.3千公顷，其中绝收400余公顷；直接经济损失3700余万元。具体灾情如下。</p>
              <p>据湖北省民政厅报告，宜昌、恩施2市（自治州）4个县（市）4.2万人受灾，1人因雷击死亡，100余人紧急转移安置；200余间房屋不同程度损坏；农作物受灾面积3.3千公顷，其中绝收400余公顷；直接经济损失2800余万元。</p>
              <p>据湖南省民政厅报告，湘西土家族苗族自治州龙山县1100余人受灾，直接经济损失900余万元。</p>
              <div class="info_img">
                <img src="../../assets/content_news.jpg">
              </div>
            </el-col>
          </el-col>
        </el-row>


      </el-main>
      <el-footer>
        <footer-modules></footer-modules>
      </el-footer>
    </el-container>

</template>

<script>

  import HeaderModules from '@/components/home/headerModules'
  import FooterModules from '@/components/home/footerModules'

  export default {
    data () {
      return {

      }
    },
    components:{HeaderModules,FooterModules},
    created () {

    },
    methods: {
    }
  }
</script>

<style scoped>
  /*走马灯*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .breadcrumb_li{
    padding: 20px 0;
    background-color: #F2F2F2;
  }
  .info_title{
    font-weight: normal;
    padding: 20px;
    margin-bottom: 0;
  }
  .info_title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }

  .info_content{
    text-align: left;
    font-size: 13px;
  }
  .info_img{
    text-align: center;
    margin: 30px 0;
  }
</style>
