<template>
  <div id="app">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><router-link :to="{ path : '/container' }">容器</router-link></el-breadcrumb-item>
      <el-breadcrumb-item><router-link :to="{ path : '/button' }">按钮</router-link></el-breadcrumb-item>
      <el-breadcrumb-item><router-link :to="{ path : '/form' }">表单</router-link></el-breadcrumb-item>
    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
