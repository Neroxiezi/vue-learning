<template>
  <div id="app">
    {{msg}}
    <div v-html="hi"></div>
    <p :title='message' :style='red' v-once>{{message}}</p>
    <!-- 使用JS表达式处理数据 -->
    <p v-if='seen'>{{message + 'jirengu'}}</p>
    <p v-once> {{ num + 10}}</p>
    <!-- 使用过滤器来格式化数据 -->
    <p v-if="seen">{{msg | capitalize}}</p>

    <!-- 事件绑定指令可以实现事件监听 -->
    <p>{{msg}}</p>
    <button @click='reverseMessage'>反转</button>
    <hr>
    <!-- 单选控件 -->
    <input type="radio" id="man" value="男" v-model="picked">
    <label for="man">男</label>
    <br>
    <input id="woman" value="女" type="radio" v-model='picked'>
    <label for="woman">女</label>
    <div style="margin-left:10px">{{picked}}</div>

    <!-- 复选控件 -->
    <hr>
    <input type="checkbox" id="Benz" v-model='checked' value='Benz'>
    <label for="Benz">Benz</label>
    <input type="checkbox" id="BMW" v-model='checked' value="BMW">
    <label for="BMW">BMW</label>
    <div>Checked Name:{{checked}}</div>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      message: "你大爷的",
      msg: "hello world!",
      hi: "<h1>hi</h1>",
      red: "color:red",
      seen: true,
      picked: "男",
      checked: []
    };
  },
  methods: {
    reverseMessage: function() {
      this.msg = this.msg
        .split("")
        .reverse()
        .join("");
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style>
</style>
