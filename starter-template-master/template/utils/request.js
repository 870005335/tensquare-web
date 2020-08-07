import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://192.168.1.200:7300/mock/5f103bcfc6bd9c5b6e264bf6/tensquare',
    timeout: 30000
})

export default service