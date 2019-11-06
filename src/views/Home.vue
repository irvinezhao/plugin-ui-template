<template>
  <div class="home">
    <img alt="WeCube logo" src="../assets/wecube.png">
    <HelloWecube msg="Welcome to Your Wecube Plugin"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWecube from '@/components/HelloWecube.vue'

export default {
  name: 'home',
  components: {
    HelloWecube
  }
}
</script>
