<template>
  <div id="app">
    <v-header></v-header>
    <nav class="navbar navbar-default " role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <!-- Collect the nav links, forms, and other content for toggling -->
      <ul class="nav navbar-nav my-nav">
        <li :class="{'active':active}">
          <router-link to="/"><a>商品</a></router-link>
        </li>
        <li :class="{'active':active}">
          <router-link to="/ratings"><a>评论</a></router-link>
        </li>
        <li :class="{'active':active}">
          <router-link to="/seller"><a>商家</a></router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from "./components/header/header";

export default {
  name: "App",
  components: {
    vHeader
  },
  data() {
    return {
      active: true
    }
  }
};
</script>

<style>
a {
  color: #000;
}
.my-nav {
  display: flex;
  width: 109%;
}
.my-nav li {
  flex: 1;
  text-align: center;
}
</style>
