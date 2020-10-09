import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
const serve = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 代理地址
    timeout: 500000 // 请求时间
})

serve.interceptors.request.use(
    config => {
        if (process.env.NODE_ENV == 'development') {//如果在开发模式下, 进行动态代理的判断
            // let target = '127.0.0.1:9001';
            // http://10.120.1.139:9010
            let target = '//10.120.1.139:9010';
            if (config.url.indexOf('/law') == 0) {
                //如果是走后台请求, 那么就进行特殊处理然后走代理
                config.url = ('/' + target + config.url);
            }
            return config;
        } else {
            return config
        }
    },
    error => {
        console.log(error) // 抛出错误
        return Promise.reject(error)
    }
)
serve.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code === 500 || res.code === 404 || res.code === 504 || res.code === 503) {
            // to re-login
            MessageBox.confirm(res.message, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => { })
        } else {
            return res;
        }
    },
    error => {
        console.log('err' + error) // 抛出错误
        MessageBox.confirm(error.message, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => { })
        return Promise.reject(error)
    }
)
export default serve
