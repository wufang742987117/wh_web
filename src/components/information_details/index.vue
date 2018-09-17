<template>

    <el-container>
      <header-modules></header-modules>
      <el-main>
        <el-row class="breadcrumb_li">
          <el-col :span="20" :offset="2">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item><a href="/">位置：首页</a></el-breadcrumb-item>
              <el-breadcrumb-item>排水排涝接近尾声 消防增援力量陆续撤离</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="20" :offset="2">
            <el-col :span="24">
              <div style="position: relative;">
                <h1 class="info_title">排水排涝接近尾声 消防增援力量陆续撤离</h1>
              </div>
            </el-col>
            <el-col :span="24">
              <pre>来源：山东寿光工作组  时间：2018-09-06 11:13:09</pre>
            </el-col>
            <el-col :span="24" class="info_content">
              <p>9月6日凌晨3时，山东寿光受灾地区应急排涝任务基本完成，由应急管理部紧急调动的天津、河北、江苏消防部队增援力量开始陆续撤离。</p>
              <p>中共中央总书记、国家主席、中央军委主席习近平对当前汛情高度重视并作出重要指示，近期全国部分地区出现强降雨，四川、陕西、甘肃等地一些河流出现超警水位，有些地方洪涝灾害严重，有的地方引发山体滑坡等地质灾害，造成人员伤亡和财产损失。习近平强调，当前，正值洪涝、台风等自然灾害多发季节，相关地区党委和政府要牢固树立以人民为中心的思想，全力组织开展抢险救灾工作，最大限度减少人员伤亡，妥善安排好受灾群众生活，最大程度降低灾害损失。要加强应急值守，全面落实工作责任，细化预案措施，确保灾情能够快速处置。要加强气象、洪涝、地质灾害监测预警，紧盯各类重点隐患区域，开展拉网式排查，严防各类灾害和次生灾害发生。国家防总、自然资源部、应急管理部等相关部门要统筹协调各方力量和资源，指导地方开展抢险救灾工作，全力保障人民群众生命财产安全和社会稳定。</p>
              <p>受灾地区已启动应急响应，积极统筹谋划、细化措施、科学应对，全力做好险情巡查抢护、水毁设施抢修抢通、人员转移安置等工作。国家防总、自然资源部、应急管理部已派出工作组赴防汛第一线，督促指导地方开展防汛抢险救灾工作。</p>
              <div class="info_img">
                <img src="../../assets/content_demo.jpg">
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
