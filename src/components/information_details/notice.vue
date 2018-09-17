<template>
    <el-container>
      <header-modules></header-modules>
      <el-main>
        <el-row class="breadcrumb_li">
          <el-col :span="20" :offset="2">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item><a href="/">位置：首页</a></el-breadcrumb-item>
              <el-breadcrumb-item>国际机构纷纷上调我国经济增速预期 彰显经济发展底气</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="20" :offset="2">
            <el-col :span="24">
              <div style="position: relative;">
                <h1 class="info_title">国际机构纷纷上调我国经济增速预期 彰显经济发展底气</h1>
              </div>
            </el-col>
            <el-col :span="24">
              <pre>来源：新华社  时间：2018-09-05 09:03:09</pre>
            </el-col>
            <el-col :span="24" class="info_content">
              <p>新华社北京7月28日电（记者 许晟、于佳欣）国家统计局日前发布上半年宏观经济数据，主要指标好于预期，宏观经济稳定性增强。基于此，国际货币基金组织、亚洲开发银行、摩根大通等国际组织和机构纷纷上调2017年中国经济增速预期，认为中国经济再平衡进程稳步推进，中国经济前景已经有良好支撑。</p>
              <p>国家统计局17日公布的2017年上半年国民经济运行数据显示，上半年我国国内生产总值381490亿元，按可比价格计算，同比增长6.9%。</p>
              <p>国际货币基金组织随即发布《世界经济展望报告》更新内容，将中国今明两年经济增长预期分别上调0.1和0.2个百分点至6.7%和6.4%。这是IMF今年第三次上调中国2017年经济增长预期。</p>
              <p>还有不少国际机构调整了增速预期。摩根大通和野村证券把中国全年经济增速预期由6.7%上调至6.8%；亚开行将2017年和2018年的中国GDP增速分别由6.5%和6.2%上调至6.7%和6.4%；渣打银行将2017年中国经济增速预期从6.6%上调至6.8%，并预计中国有望实现2010年以来首次加速增长。</p>
              <p>还有，花旗银行将中国三、四季度经济增速预期，分别从此前的6.5%和6.4%上调至6.7%和6.6%，2017年全年GDP增速预测值也从6.6%调高至6.8%；彭博对56位经济学家调查后也认为，中国经济三、四季度预期增长分别为6.7%和6.6%，比此前预估值分别提高0.1%。</p>
              <p>国际组织和机构上调经济增速预期的举动，缘于我国二季度经济的超预期表现。亚开行在其发布的《亚洲经济展望》报告中解释上调增速预期时提到，二季度经济数据的超预期表现；野村证券称，二季度经济动能高于预期且6月份经济数据表现较好。</p>
              <p>此外，国际机构和组织还对中国经济进行更深入的分析，肯定了经济稳中向好的态势。亚洲开发银行的报告认为，居民收入稳步增长、公共支出不断扩大支撑国内消费情况持续向好；部分商品价格自2016年的低位温和反弹，叠加外需回暖，刺激了上半年进出口反弹。</p>
              <p>虽然基建、房地产投资放缓，叠加金融去杠杆冲击，或对下半年中国经济产生一定冲击，但整体看，消费、服务业的稳定扩张以及民间投资不断上行仍为今年中国经济积极前景提供了支撑。</p>
              <p>商务部研究院区域经济合作研究中心主任张建平认为，外部环境的不确定性和投资放缓并不会对下半年中国经济发展产生太大影响，因为上半年中国进出口增速明显，为经济增长奠定了良好基础，全年外贸实现正增长问题不大。可以期待，今年宏观经济增长前景将好于去年。</p>
              <p>国际机构的数据分析也预示着中国经济的前景看好。渣打中国经济增长月度分析数据显示，7项前瞻性经济指标近期均取得不同程度的改善，这意味着未来数月内中国经济出现突然放缓的可能性微乎其微；花旗银行预计下半年经济略微放缓但仍能保持强劲增长，政府达成增长目标几无悬念。</p>
              <p>不少企业也对未来的宏观形势表示乐观。上汽集团旗下的上汽大通上半年销量同比增长近30%。上汽集团副总裁蓝青松说，上半年商用车销量的强劲增长，是宏观经济稳中向好发展的印证，“我们始终对宏观经济发展有信心，相信下半年仍将保持快速增长。”</p>
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
