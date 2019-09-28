<template>
  <div class="img">
      <div class="login">
        <div class="container">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
              <FormItem prop="user">
                  <Input type="text" v-model="formInline.user" placeholder="用户名">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                  </Input>
              </FormItem><br>
              <FormItem prop="password">
                  <Input type="password" v-model="formInline.password" placeholder="用户密码">
                      <Icon type="ios-lock-outline" slot="prepend"></Icon>
                  </Input>
              </FormItem><br>
              <FormItem>
                  <Button type="primary" long @click="login()">登录</Button>
              </FormItem>
          </Form> 
        </div>
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
    logon() {
      
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
    width: 250px;
    height: 250px;
    background-color: rgba(240, 243, 243, .8);
    position: absolute;
    right: 15%;
    bottom: 20%;
    border-radius: 5px;
  }
  .container{
    margin-left: 40px;
    margin-top: 50px;
  }
</style>