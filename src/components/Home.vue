<template>
  <div class="home">
    <el-button @click="shortenBtnClick">toShorten</el-button>
  </div>
</template>

<script setup lang="ts">

  import { Router, useRouter } from "vue-router";

  const router:Router = useRouter()

  console.log(router)

  const shortenBtnClick = () => {
    router.push({
      path: 'shortenUrl'
    })
  }

</script>

<style lang="scss" scoped>

</style>
