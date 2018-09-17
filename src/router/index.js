import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => require(['c/login'], resolve);  //登录
const Home = resolve => require(['c/home'], resolve);    //主页
const Information_details = resolve => require(['c/information_details'], resolve);    //信息展示详情
const Notice_details = resolve => require(['c/information_details/notice'], resolve);    //公告展示详情
const New_detail = resolve => require(['c/information_details/news'], resolve);    //最新灾情详情
const Population_structure = resolve => require(['c/population_structure'], resolve);    //人群结构
const Regional_basic_information = resolve => require(['c/regional_basic_information'], resolve);    //地区交通运输条件
const Regional_index_jichu = resolve => require(['c/regional_basic_information/index_jichu'], resolve);    //地区基础设备
const Regional_index_sunhai = resolve => require(['c/regional_basic_information/index_sunhai'], resolve);    //地区损害情况

const Casualty_information = resolve => require(['c/data_model'], resolve);  //人员伤亡模型

const Tran_condition = resolve => require(['c/data_model/tran_condition'], resolve);  //交通运输模型
const Rescue = resolve =>require(['c/data_model/rescue'], resolve);  //物资及救援设施受损模型

const Demand = resolve => require(['c/data_model/demand'], resolve);  //物资及条件配备需求模型

const Equipped = resolve => require(['c/data_model/equipped'], resolve);  //救援人员配备需求模型

const Casualty = resolve => require(['c/data_model/casualty'], resolve);  //灾害损失模型
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      component: Login
    },
		{
      path: '/home',
      component: Home
    },
    {
      path: '/information_details',
      component: Information_details
    },
    {
      path: '/notice_details',
      component: Notice_details
    },
    {
      path: '/new_detail',
      component: New_detail
    },
    {
      path: '/population_structure',
      component: Population_structure
    },
    {
      path: '/regional_basic_information',
      component: Regional_basic_information
    },
    {
      path: '/regional_index_jichu',
      component: Regional_index_jichu
    },
    {
      path: '/regional_index_sunhai',
      component: Regional_index_sunhai
    },
		{
			path: '/casualty',
			component: Casualty_information
		},
		{
			path: '/tran_condition',
			component: Tran_condition
		},
		{
			path: '/rescue',
			component: Rescue
		},
		{
			path: '/demand',
			component: Demand
		},
		{
			path: '/equipped',
			component: Equipped
		},
		{
			path: '/casualty_info',
			component: Casualty
		},
  ]
})
export default router
