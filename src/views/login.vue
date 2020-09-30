<template>
  <div>
      <!-- 登录页面 -->
      <el-button type="primary" @click="goLogin">登录</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        goLogin() {
            this.$router.replace({path: '/home', query: {}})
        }
    }
}
</script>

<style>

</style>