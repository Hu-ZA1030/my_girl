// 【生产环境】的应用配置文件
export default {
	// 前端路由的根路径
	webBaseURL: '/an:mhrcms/mhrcms/',
	// 后台api默认前缀
	apiBaseURL: '/an:mhrcms/mhrcms/api',
	// 是否是开发环境
	isDev: false,
	// 是否开启VC
	isOpenVC: false,
	viewPDFURL: 'http://ntsgw.oa.com/api/sso/hr-fileservices-view/viewOnline',
	downloadAttachURL: 'http://ntsgw.oa.com/api/sso/hr-fileservices-load/httpDownload',
	uploadApiURL: '/hrportal/api'
}
