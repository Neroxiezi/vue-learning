<template>
    <div class='wrapper' v-if="isshow">
        <div class='loading'>
        <i class="fa fa-spinner" aria-hidden="true"></i><!-- <img src="./loading.gif" alt="" width="40" height="40"> -->
        </div>
    </div>
</template>
<script>
export default {
  name: "loading",
  props: {
    duration: {
      type: String,
      default: "1s" //默认1s
    },
    isshow: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {};
  }
};
</script>
<style>
</style>
