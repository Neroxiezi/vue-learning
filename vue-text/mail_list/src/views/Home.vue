<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Hello, world!</h1>
      <p>一个有信念者所开发出的力量，大于99个只有兴趣者。</p>
    </div>
    <div class="row">
      <v-section></v-section>
    </div>
  </div>
</template>
<script>
import vSection from "@/components/vSection";
export default {
  components: {
    vSection: vSection
  }
};
</script>
<style lang="less">
.container {
  .jumbotron {
    background-color: #008e59;
    border-radius: 0px;
    color: beige;
    h1 {
      float: left;
      width: 100%;
      font-size: 80px;
      text-align: left;
    }
  }
}
</style>