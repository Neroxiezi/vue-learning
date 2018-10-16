<template>
  <div id="app">
    <el-container>
      <el-header><e-nav></e-nav></el-header>
      <el-main><v-content></v-content></el-main>
    </el-container>
  </div>
</template>

<script>
import eNav from './components/v-nav'
import vContent from './components/v-main'
export default {
  components:{
    'eNav':eNav,
    'vContent':vContent
  }
};
</script>

<style>
</style>
