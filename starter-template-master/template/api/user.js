import request from '@/utils/request'
const api_group = 'user'
const api_name = 'user'
export default {
    sendsms(mobile) {
        return request({
            url: `/${api_group}/${api_name}/sendsms/${mobile}`,
            method: 'put'
        })
    },
    add(code, pojo) {
        return request({
            url: `/${api_group}/${api_name}/register/${code}`,
            method: 'post',
            data: pojo
        })
    },
    login(pojo) {
        return request({
            url: `/${api_group}/${api_name}/login`,
            method: 'post'
        })
    },
}