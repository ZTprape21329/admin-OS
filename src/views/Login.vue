<template>
  <div class="img">
      <div class="login" @keyup.enter="login()">
        <Card>
          <p slot="title">
           欢迎登陆
          </p>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="用户名">
                        <Icon size='16' type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem><br>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="用户密码">
                        <Icon  :size='16' type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem><br>
                <FormItem>
                    <Button @click="login()" type="primary" long>登录</Button>
                </FormItem>
            </Form> 
        </Card>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
          user: [
            { required: true, message: '输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '输入密码', trigger: 'blur' }
          ],
      }
    }
  },
  methods: {
    login() {
      this.axios.get('http://127.0.0.1:3000/login/login',{
        params: {
          uname: this.formInline.user,
          upwd: this.formInline.password
        }
      }).then(res => {
       let reg = res.data.code;
       if(reg === 404) {
         this.$Notice.error({
           title: '密码错误！'
         })
       } else if(reg === 200) {
         this.$router.replace('/home')
       }
      })
    }
  }
}
</script>
<style scoped>
  .img {
    width: 100%;
    height: 100%;
    background: url('../assets/1.jpg') center center no-repeat;
    position: fixed;
    background-size: 100% 100%;
  }
  .login {
    width: 350px;
    height: 350px;
    position: absolute;
    right: 15%;
    bottom: 20%;
    border-radius: 5px;
  }
</style>