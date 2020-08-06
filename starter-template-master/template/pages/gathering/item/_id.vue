<template>
    <div>
        活动详情
        {{item.id}}
        <hr>
        {{item.name}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    asyncData({params}) {
        return axios.get(`http://192.168.1.200:7300/mock/5f103bcfc6bd9c5b6e264bf6/tensquare/gathering/gathering/${params.id}`)
        .then(res => {
            return {item: res.data.data}
        })
    }
}
</script>