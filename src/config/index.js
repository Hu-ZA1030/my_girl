import baseConfig from './config.base.js'

// 根据打包环境变量读取相应的配置信息,覆盖默认配置
const envConfig = require('./config.' + process.env.NODE_ENV + '.js').default
Object.assign(baseConfig, envConfig)

export default baseConfig
