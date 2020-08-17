<template>
    <div class="wrapper loginsign"> 
   <div class="item"> 
    <div class="form"> 
     <h3 class="loginsign-title">用户登录</h3> 
     <form class="sui-form login-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">手机号：</label> 
       <div class="controls"> 
        <input type="text" v-model="user.phone" placeholder="11位手机号" class="input-xlarge" data-rules="required"> 
       </div> 
      </div> 
      <div class="control-group"> 
       <label for="inputpassword" class="control-label">密码：</label> 
       <div class="controls"> 
        <input type="text" v-model="user.password" placeholder="输入登录密码" class="input-xlarge"> 
       </div> 
      </div> 
      <div class="controls"> 
       <label> <input type="checkbox" name="remember-me"><span class="type-text" style="font-size:12px;">记住登录状态</span> </label> 
       <button type="button" @click="login" class="sui-btn btn-danger btn-yes">登 录</button> 
      </div> 
      <div class="other-methods"> 
      </div> 
     </form> 
    </div> 
   </div> 
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-loginsign.css'
import userApi from '@/api/user'
import {setUser} from '@/utils/auth'
export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
       login() {
           userApi.login(this.user).then(res => {
               if(res.data.flag) {
                   // 登录成功后：提示并保存用户信息到cookie 页面跳转
                   let token = res.data.data.token;
                   let name = res.data.data.name;
                   let avatar = res.data.data.avatar;
                   setUser(token, name, avatar);
                   location.href = '/'
               } else {
                   this.$message({
                       message: res.data.message,
                       type: 'error'
                   })
                   this.user = {}
               }
           })
       }
    }
}
</script>