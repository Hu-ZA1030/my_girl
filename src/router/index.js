/*
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-09-26 23:32:56
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-02 14:54:22
 * @FilePath: \my-girl\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import appConfig from '@/config'
// import store from '../store'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	redirect: '/first'
},
// 首页
{
	name: 'first',
	path: '/first',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/home/index.vue'),
},
{
	name: 'second',
	path: '/second',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/second/index.vue'),
},
{
	name: 'three',
	path: '/three',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/three/index.vue'),
},
{
	name: 'four',
	path: '/four',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/four/index.vue'),
},
{
	name: 'five',
	path: '/five',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/five/index.vue'),
},
{
	name: 'six',
	path: '/six',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/six/index.vue'),
},
{
	name: 'seven',
	path: '/seven',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/seven/index.vue'),
},
{
	name: 'eight',
	path: '/eight',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/eight/index.vue'),
},
{
	name: 'nine',
	path: '/nine',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/nine/index.vue'),
},
{
	name: 'ten',
	path: '/ten',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/ten/index.vue'),
},
{
	name: 'eleven',
	path: '/eleven',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/eleven/index.vue'),
},
{
	name: 'twelve',
	path: '/twelve',
	meta: {
		title: '小仙女♥',
		keepAlive: false,
		isBack: false,
	},
	component: () => import( /* webpackChunkName:"index" */ '@/views/twelve/index.vue'),
},
];

const router = new VueRouter({
	mode: 'history',
	base: appConfig.webBaseURL,
	routes
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
});


// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
	return originalPush.call(this, location).catch(err => err)
}
export default router
