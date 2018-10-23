<template>
  <div id="app">
    <div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">localstorage 使用</h3>
        </div>
        <div class="panel-body">
          <h1 v-html="msg"></h1>
          <input type="text" v-model="itemNew" v-on:keyup.enter="addNew" name="" id="input" class="form-control" value="" required="required" pattern="" title="">
          <ul>
            <li v-for="item in items" v-bind:class="{isStudent:item.student}" v-on:click="turnRed(item)">
              {{item.name}}
            </li>
          </ul>
          <button class="btn btn-success" @click="clearall">清除</button>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import Storage from "./localstorage";

export default {
  name: "app", //name属性作为组件名称，全局 ID 自动作为组件的 name
  data() {
    return {
      msg: "这个是学生列表",
      items: Storage.fetch(), //获取存在 storage 里面的键值对
      itemNew: ""
    };
  },
  components: {
    //在#app元素内，注册组件
    //Hello
  },
  methods: {
    addNew: function() {
      this.items.push({
        name: this.itemNew,
        student: false
      });
      //清空文本栏
      this.itemNew = null;
    },
    turnRed: function(item) {
      //逆反布尔值
      console.log(item);
      item.student = !item.student;
    },
    clearall: function() {
      //console.log(1123);
      this.items = [];
      this.itemNew = null;
      Storage.clear();
    }
  },
  watch: {
    items: {
      handler: function(items) {
        if (items.length > 0) {
          Storage.save(items); //监控li变化，将新增的值存入 sessionStorage 里
        }
      }, //sessionStorage 里的数据将在页面关闭后删除
      deep: true //深度监视，只要 items 有一点改变就会触发回调函数handler
    }
  }
};
</script>

<style>
.isStudent {
  color: red;
}
</style>
