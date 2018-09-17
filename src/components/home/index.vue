<template>
  <el-container>

    <!--头部-->
    <header-modules></header-modules>

    <!--内容-->
    <el-main>
      <el-carousel>
        <el-carousel-item >
            <img src="../../../static/img/banner1.jpg" alt="" class="banner">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../../static/img/banner2.jpg" alt="" class="banner">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../../static/img/banner3.jpg" alt="" class="banner">
        </el-carousel-item>
        <el-carousel-item >
            <img src="../../../static/img/banner4.jpg" alt="" class="banner">
        </el-carousel-item>
      </el-carousel>

      <el-row class="marg-top-15">
        <el-col :span="4" :offset="2">
          <el-col :span="24" style="background-color: #F9F9F9;">
            <iframe width="200" scrolling="no" height="60" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&bgc=%23&icon=1&py=wuhu&num=1&site=13"></iframe>
          </el-col>
          <el-col :span="24" class="marg-top-15">
            <div class="list_title"><label>| </label> 通知公告</div>
            <ul class="list_ul">
              <li @click="deTailNotic"><span class="disc"></span> 国际机构纷纷上调我国经济增速预期 彰显经济发展底气 </li>
              <li @click="deTailNotic"><span class="disc"></span> 第四届“中国减灾杯”(2018) 减灾救灾摄影大赛征稿启事 </li>
              <li @click="deTailNotic"><span class="disc"></span> 国务院安委办关于切实加强“五一”节和汛期安全防范工作的通知 </li>
              <li @click="deTailNotic"><span class="disc"></span> 国务院安委会办公室关于切实做好当前非煤矿山安全生产工作的通知 </li>
            </ul>
          </el-col>
        </el-col>
        <el-col :span="8" :offset="1">
          <el-tabs v-model="activeName_info" @tab-click="handleClick_info" stretch>
            <el-tab-pane label="减灾要闻" name="first">
              <ul class="list_ul" >
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     排水排涝接近尾声 消防增援力量陆续撤离
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-06]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     2018年中国-东盟减轻灾害风险研讨会在广西南宁召开
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-06]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     应急部工作组指导协助云南文山抢险救援
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-05]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     黄明：以铁的纪律为应急管理事业改革发展提供坚强保障
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-03]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     应急管理部部署文物建筑博物馆火灾防控措施
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-03]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     国家减灾委应急部对滇启动国家Ⅳ级响应
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-03]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     全力做好广东云南两省重点地区抢险救援工作
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-02]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     国家减灾委应急部对粤启动Ⅳ级救灾响应
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-02]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     应急管理部调度广东暴雨洪涝抢险救援工作
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-01]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                     强降雨致西藏部分地区600余间房屋倒损
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [08-31]
                  </el-col>
                </li>
              </ul>

            </el-tab-pane>
            <el-tab-pane label="时政新闻" name="second">
              <ul class="list_ul" >
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                      李克强会见圣多美和普林西比总理特罗瓦达
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-06]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                       习近平同刚果共和国总统萨苏举行会谈
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-05]
                  </el-col>
                </li>
            </ul>
            </el-tab-pane>
            <el-tab-pane label="部委动态" name="third">
              <ul class="list_ul" >
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                       我国南北方多地近期将有强降雨 国家防总部署防范工作
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-03]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                        水利部：越近汛末 越不能麻痹侥幸
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [08-31]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                         国家发改委紧急下达山东省救灾应急补助中央预算内投资1.77亿元
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [08-30]
                  </el-col>
                </li>
            </ul>
            </el-tab-pane>
            <el-tab-pane label="地方动态" name="fourth">
              <ul class="list_ul" >
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                        新疆维吾尔自治区水利厅全力以赴做好度汛工作
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-06]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                         江西省水利厅召开抗旱形势分析会商会
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-06]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                          安徽：张曙光副省长主持召开全省减灾救灾灾后重建工作现场会 省民政厅安排部署受灾群众生活和倒房重建工作
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-05]
                  </el-col>
                </li>
                <li :span="24" @click="deTail">
                  <el-col :span="18" class="li_newest">
                    <span class="disc"></span>
                           冷空气携风雨袭四川 7市将有大到暴雨需防地质灾害
                  </el-col>
                  <el-col :span="4" :offset="2">
                    [09-03]
                  </el-col>
                </li>
            </ul>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-col :span="24">
            <div class="list_title"><label>| </label> 最新灾情</div>
            <ul class="list_ul" >
              <li :span="24" @click="deTailNews">
                <el-col :span="18" class="li_newest">
                  <span class="disc"></span>
                  鄂湘风雹洪涝灾致1人死亡
                </el-col>
                <el-col :span="4" :offset="2">
                  [09-07]
                </el-col>
              </li>
              <li :span="24" @click="deTailNews">
                <el-col :span="18" class="li_newest">
                  <span class="disc"></span>
                  西藏申扎县1人因雷击死亡
                </el-col>
                <el-col :span="4" :offset="2">
                  [09-07]
                </el-col>
              </li>
              <li :span="24" @click="deTailNews">
                <el-col :span="18" class="li_newest">
                  <span class="disc"></span>
                  新疆伽师地震损失3600余万元
                </el-col>
                <el-col :span="4" :offset="2">
                  [09-06]
                </el-col>
              </li>
              <li :span="24" @click="deTailNews">
                <el-col :span="18" class="li_newest">
                  <span class="disc"></span>
                  强降雨致西藏部分地区600余间房屋倒损
                </el-col>
                <el-col :span="4" :offset="2">
                  [09-05]
                </el-col>
              </li>
              <li :span="24" @click="deTailNews">
                <el-col :span="18" class="li_newest">
                  <span class="disc"></span>
                  云南洪涝风雹灾造成1人死亡1人失踪
                </el-col>
                <el-col :span="4" :offset="2">
                  [09-05]
                </el-col>
              </li>
              <li :span="24" @click="deTailNews">
                <el-col :span="18" class="li_newest">
                  <span class="disc"></span>
                  华北东北洪涝风雹灾损失近9亿元
                </el-col>
                <el-col :span="4" :offset="2">
                  [09-04]
                </el-col>
              </li>
              <li :span="24" @click="deTailNews">
                <el-col :span="18" class="li_newest">
                  <span class="disc"></span>
                  新疆伽师县发生5.5级和4.7级地震
                </el-col>
                <el-col :span="4" :offset="2">
                  [08-31]
                </el-col>
              </li>
            </ul>
          </el-col>
        </el-col>
      </el-row>
      <el-row class="marg-top-30">
        <el-col :span="20" :offset="2" class="friendship_link">
          <pre>友情链接：     中国天气网   国家防汛抗旱总指挥部</pre>
        </el-col>
      </el-row>

    </el-main>

    <!--底部-->
    <el-footer>
      <footer-modules></footer-modules>
    </el-footer>
  </el-container>

  <!--<el-row class="container">-->
    <!--<el-col :span="24" class="topbar-wrap">-->
      <!--<div class="topbar-logos">-->
        <!--<a href="/"><img src="../../assets/logo.png"></a>-->
      <!--</div>-->
    <!--</el-col>-->
  <!--</el-row>-->
</template>
<script>
  import HeaderModules from '@/components/home/headerModules'
  import FooterModules from '@/components/home/footerModules'

  export default {
    data () {
      return {
        activeName_info: 'first',
				imgList:[
					'../assets/img/banner_51.jpg','../assets/img/banner_54.jpg','../assets/img/banner_art.jpg','../assets/img/banner_bwg.jpg'
				]
      }
    },
    components:{HeaderModules,FooterModules},
    created () {

    },
    methods: {
      handleClick_info(tab, event) {
        console.log(tab, event);
      },
			deTail() {
				let _this = this;
				_this.$router.push({ path: '/information_details' })
			},
      deTailNotic() {
        let _this = this;
        _this.$router.push({ path: '/notice_details' })
      },
      deTailNews() {
        let _this = this;
        _this.$router.push({ path: '/new_detail' })
      }
    }
  }
</script>
<style scoped lang="scss">
  /*走马灯*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item img {
    width:100%;
    height:100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .list_ul li:hover {
    color:#C90001;
  }

  .list_title{
    text-align: left;
    border-bottom: 2px solid #e4e7ed;
    color: #409eff;
    padding: 0 20px 0 0;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    margin-bottom: 15px;
  }
  .list_title>label{
    color: #C90001;
    font-weight: bolder;
    font-size: 25px;
  }

  .list_ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .list_ul li{
    text-align: left;
    line-height: 2;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 13px;
		cursor: pointer;
  }

  .li_newest{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .disc{
    width: 6px;
    height: 6px;
    background-color: #C90001;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
		margin:-5px 10px 0 0;
  }

  /*友情链接*/
  .friendship_link{
    height: 70px;
    line-height: 70px;
    text-align: left;
    padding: 0 20px;
    background-color: #F2F2F2;
  }
  .friendship_link pre{
    margin: 0;
  }

	.header-tab li {
		font-weight: bold;
	}

</style>
