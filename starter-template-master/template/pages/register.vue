<template>
    <div class="wrapper loginsign"> 
   <div class="user signup"> 
    <div class="form" align:center> 
     <h3 class="loginsign-title">注册新账号</h3> 
     <form class="sui-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">名字</label> 
       <div class="controls"> 
        <input type="text"  v-model="user.name" placeholder="真实姓名或常用昵称" class="input-xlarge"> 
       </div> 
      </div> 
      <div class="different"> 
       <div class="radio-content"> 
        <div id="a1" class="phone"> 
         <div class="control-group number"> 
          <input type="text" v-model="user.mobile" placeholder="仅支持大陆手机号" class="input-xlarge"  data-rules="required|mobile" /> 
         </div> 
         <div class="control-group code"> 
          <div class="input-append"> 
           <input v-model="code" type="text" placeholder="短信验证" class="span2 input-large msg-input"> 
           <button type="button" class="sui-btn msg-btn"  @click="sendsms">获取验证码</button> 
          </div> 
         </div> 
         <div class="control-group"> 
          <label for="inputpassword" class="control-label">密码</label> 
          <div class="controls"> 
           <input type="password"  v-model="user.password" placeholder="请输入6-16位密码" class="input-xlarge"> 
          </div> 
         </div> 
        </div> 
       </div> 
      </div> 
      <div class="control-group btn-signup"> 
       <label class="control-label"></label> 
       <div class="controls"> 
        <label> <input type="checkbox"><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label> 
        <button type="button" class="sui-btn btn-danger btn-yes">注 册</button> 
       </div> 
      </div> 
     </form> 
    </div> 
   </div> 
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-loginsign.css'
import userApi from '@/api/user'
export default {
    data() {
        return {
            user: {},
            code: '' //验证码
        }
    },
    methods: {
        register() {
            userApi.add(this.code, this.user).then(res => {
                if(res.data.flag ) {
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    })
                } else {
                    this.$message({
                        message: '注册失败',
                        type: 'error'
                    })
                }
            })
        },
        sendsms() {
            userApi.sendsms(this.user.mobile).then(res => {
                this.$message({
                    message: res.data.message,
                    type: res.data.flag ? 'success' : 'error'
                })
            })
        }
    }
}
</script>