<template>
  <!--  todo 处理qiankun路由异步组件加载报错问题  -->
  <!--  <qiankun-head></qiankun-head>-->
  <nav>
    <router-link :to="`${base}/`">子Home</router-link> |
    <router-link :to="`${base}/about`">子About(动态)</router-link> |
    <router-link :to="`${base}/viewer`">子Viewer</router-link> |
    <router-link :to="`${base}/list`">子List</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue";
const base =
  getCurrentInstance()?.appContext.config.globalProperties.$qiankunAppName ||
  "";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
