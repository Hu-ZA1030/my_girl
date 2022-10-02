import { request } from '@/axios/request.js'

export default {
    demo() {
        return axiosPromise({
            url: 'demo'
        })
    },
}

// 请求参数封装
function axiosPromise({
    url,
    data,
    method = 'get'
}) {
    return request(url, data, method)
}
