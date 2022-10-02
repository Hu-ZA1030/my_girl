import axios from 'axios'
import appConfig from '@/config'

const httpRequest = axios.create({
    baseURL: appConfig.apiBaseURL,
    timeout: 30000,
    headers: {'Content-Type': 'application/json;'}
})
export const request = (url = '', data = {}, method = 'post') => {
    let config;
    if (method === 'get' || method === 'delete') {
        config = {url: url, params: data, method: method};
    } else
    if (method === 'file') {//文件的传输方式
        config = {
            url: url,
            data: data.formData,
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
    } else {
        config = {url: url, data: data, method: method};
    }
    return httpRequest.request(config);
}
httpRequest.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
httpRequest.interceptors.response.use(
    (response) => {
        if(!response.data) {
            //需设置提示
            //服务器无响应
        } else {
            switch (response.data.code) {
                case 200:
                    break;
                case 300:
                    break;
                case 400:
                    break;
                case 500:
                    break;
                case 600:
                    break;
                default:
                    break;
            }
            if(response.data.code != 200) {
                //需设置提示
                // console.log(response.data.data)
            }
        }
        return response.data;
    },
    (error) => {
        if (error.response) {
            Message({
                showClose: true,
                message: error.response.data,
                type: 'error'
            });
        }
        //需设置提示
        //服务器无响应
        return Promise.reject(error);
    }
)
