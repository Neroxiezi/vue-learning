<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <a v-link="{path:'/goods'}">
        <div class="tab-item">商品</div>
      </a>
      <a v-link="{path:'/ratings'}">
        <div class="tab-item">评论</div>
      </a>
      <a v-link="{path:'/seller'}">
        <div class="tab-item">商家</div>
      </a>
    </div>
  </div>
  <router-view></router-view>
  
</template>

<script>
import vHeader from "./components/header/header";

export default {
  name: "App",
  components: {
    vHeader
  }
};
</script>

<style>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab a {
  flex: 1;
  text-align: center;
}
</style>
