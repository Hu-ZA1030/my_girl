/*
 * @Author: Hu-ZA1030 2250552567@qq.com
 * @Date: 2022-10-02 15:48:49
 * @LastEditors: Hu-ZA1030 2250552567@qq.com
 * @LastEditTime: 2022-10-04 17:14:26
 * @FilePath: \my_girl\src\config\config.test.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Hu-ZA1030 2250552567@qq.com, All Rights Reserved. 
 */
// 【测试环境】的应用配置文件
export default {
  // 前端路由的根路径
  // webBaseURL: '/an:ntsapps_dev_m/mhrcms/',
  // 后台api默认前缀
  // apiBaseURL: '/an:ntsapps_dev_m/mhrcms/api',
  // 是否是开发环境
  isDev: false,
  // 是否开启VC
  isOpenVC: true,
  viewPDFURL: 'http://demo.ntsgw.oa.com/api/sso/hr-fileservices-view/viewOnline',
  downloadAttachURL: 'http://demo.ntsgw.oa.com/api/sso/hr-fileservices-load/httpDownload',
  uploadApiURL: '/api'
}
