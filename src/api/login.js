import request from '@/utils/request'
// get 请求
export function getUserInfo(params) {
    return request({
        url: '/law/xxx',
        method: 'get',
        params
    })
}
// post 请求
export function goLogin(data) {
    return request({
        url: '/vue-element-admin/article/update',
        method: 'post',
        data
    })
}
