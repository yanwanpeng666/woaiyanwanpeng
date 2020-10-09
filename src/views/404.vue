<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/images/404_images/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/images/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/images/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/images/404_images/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">警告!</div>
        <div class="bullshit__info">warning
          <a style="color:#20a0ff" href="javascript:void(0);" @click="goHome('/')">返回登录页</a>
        </div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">页面不见了...</div>
        <a href="javascript:void(0);" class="bullshit__return-home" @click="goHome('/home')">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Page404',
    computed: {
        message() {
            return 'The page is missing...'
        }
    },
    methods:{
        goHome(path) {
            this.$router.replace({path: path})
        }
    }
}
</script>
<style>
</style>
