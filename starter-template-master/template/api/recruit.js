import request from '@/utils/request'
const group_name = 'recruit'
const api_name = 'recruit'
export default {
  getList() {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'get'
    })
  },
  search(page, size, searchMap) {
    return request({
      url: `/${group_name}/${api_name}/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  findById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  recommend() { 
    return request({ 
      url: `${group_name}/${api_name}/search/recommend`, 
      method: 'get' 
    }) 
  },
  newlist() { 
    return request({ 
      url: `/${group_name}/${api_name}/search/newlist`, 
      method: 'get' 
    }) 
  }
}
