<template>
  <div id="app">
    <!--<router-view keep-alive/>-->
      <keep-alive>
          <router-view v-wechat-title="$route.meta.title">

          </router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
