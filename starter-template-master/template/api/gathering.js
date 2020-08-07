import request from "@/utils/request"
const group_name='gathering'
const api_name='gathering'
export default {
    getList(){
        return request(
            {
                url:`/${group_name}/${api_name}`,
                method:'get'
            }
        );
    },
    search(page,size,searchMap){
        return request(
            {
                url: `/${group_name}/${api_name}/search/${page}/${size}`,
                method: 'post',
                data: searchMap
            }
        );
    },
    findById(id){
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'get'
        })     
    }
}