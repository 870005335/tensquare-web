<template>
    <div class="wrapper activities">
        <h1>{{item.name}}</h1>
        <div class="img-text">
            <div class="left-img">
                <img :src="item.image" alt="" />
            </div>
            <div class="right-txt">
                <p>开始时间： {{item.starttime}}</p>
                <p>结束时间： {{item.endtime}}</p>
                <p>举办地点： {{item.address}}</p>
                <p>主办方：   {{item.sponsor}}</p>
                <p>报名截止： <span class="big">{{item.enrolltime}}</span></p>
                <div class="join">
                    <a target="_blank" :href="item.url" class="sui-btn btn-danger">立即报名</a> <span class="will">报名即将开始</span>
                </div>
            </div>
        </div>
        <div class="simple-text">
            <div class="left-content">
                <div class="content-item">
                    <div class="tit"><span>大会介绍</span></div>
                    <div class="text">
                        <h4></h4>
                        <p>{{item.summary}}</p>
                    </div>
                </div>
                <div class="content-item">
                    <div class="tit"><span>议题简介</span></div>
                    <div class="text">
                        <h4></h4>
                        <p>{{item.detail}}</p>                        
                    </div>                    
                </div>                
            </div>
            <div class="right-intro">
                <div class="content-item">
                    <div class="tit"><span>活动组织者</span></div>
                    <div class="text">
                        <p>主办方： {{item.sponsor}}</p>
                    </div>
                </div>
                <div class="content-item">
                    <div class="tit"><span>相关链接</span></div>
                    <div class="text">
                        <p>活动官网： infoQ.com</p>
                    </div>
                </div>
                <div class="content-item">
                    <div class="tit"><span>分享扩散</span></div>
                    <div class="text">
                       <div class="social-share" data-sites="weibo,qq,qzone,wechat" data-url="itheima.com" data-title="分享"></div>
                    </div>
                </div>
            </div>
        </div>        
    </div>

</template>

<script>
import '~/assets/css/page-sj-activity-detail.css' 
import gatheringApi from '@/api/gathering' 
export default { 
	asyncData({params}){ 
	return gatheringApi.findById(params.id).then(res => 
	    { return {item: res.data.data} }) 
    },
    head: {
        script: [
            { src: 'https://cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js' },           
            { src: 'https://cdn.bootcss.com/qrcode-generator/1.3.1/qrcode.js' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css' }
        ]
    } 
}
	
</script>