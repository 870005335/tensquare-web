<template>
      <!--两列布局-->
    <div class="wrapper tag-item">
        <div class="job-intro">
    <div class="left-img">
        <img :src="enterprise_item.logo" alt="" />
    </div>
    <div class="middle-intro">
       <div class="name">{{item.jobname}}</div>
       <div class="intro">{{item.salary}} / 经验{{item.condition}} / {{item.education}} / {{item.type}}</div>
       <div class="tag">
           <li v-for="(label,index) in item.labels.split(',')" :key="index">
               {{label}}
           </li>
       </div>
    </div>
    <div class="right-tool">      
        <p class="throw"><button class="sui-btn btn-throw">投简历</button></p> 
        <button class="sui-btn btn-collect">收藏</button>
        <span>100收藏</span>
        <span>291浏览</span>
    </div>
    <div style="clear:both"></div>
</div>
        <div class="fl left-list ">
            <div class="tit">
                <span>职位描述</span>
            </div>
            <div class="content">
                 <p>{{item.content1}}</p>
            </div>
            <div class="tit">
                <span>职位要求</span>
            </div>
            <div class="content">
               <p>{{item.content2}}</p>
            </div>
            <div class="time">发布于1小时前</div>
        </div>
        <div class="fl right-tag">
            <div class="company-job">
    <div class="intro">
        <img src='' alt="" />
        <div class="title">
            {{enterprise_item.name}}
        </div>
        <div class="content">
            {{enterprise_item.summary}}
        </div>
    </div>
    <div class="tag">
      <li v-for="(label,index) in enterprise_item.labels.split(',')" :key="index">{{label}}</li>
    </div>
    <div class="btns">
        <a class="sui-btn btn-home" :href="enterprise_item.url" target="_blank">企业主页</a>
        <a class="sui-btn btn-position"  href="" target="_blank">职位数量：{{enterprise_item.jobcount}}</a>
    </div>
</div>
        </div>
    </div>
</template>

<script>
import '~/assets/css/page-sj-recruit-detail.css'
import recruitApi from '@/api/recruit'
import enterpriseApi from '@/api/enterprise'
export default {
    asyncData(params) {
        console.log(params)
        return recruitApi.findById(params.params.id).then(res => {
            return enterpriseApi.findById(res.data.data.eid).then(
                res2 => {
                    return { enterprise_item: res2.data.data,
                     item:res.data.data 
                     }
                }
            )
        })
    }
}
</script>