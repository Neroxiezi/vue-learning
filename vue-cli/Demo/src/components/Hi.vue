<template>
    <div class="container">
        <div class="alert alert-success">
            <strong>作者: {{ msg.author }} 博客: {{msg.url}}</strong> 
        </div>
    </div>
</template>
<script>
export default {
  name: "Hi",
  data() {
    return {
      msg: {
          author:'南丞',
          url:'https://friday-go.cc'
      }
    };
  }
};
</script>
<style>
</style>