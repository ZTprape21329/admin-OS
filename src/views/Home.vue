<template>
  <div class="home">
   <Button type="primary" @click="out()">退出</Button>
  </div>
</template>

<script>
import  hello from '../components/HelloWorld.vue'

export default {
  name: 'hello',
  components: {
   hello
  },
  methods: {
    out() {
      this.$router.replace('/')
    }
  }
}
</script>
