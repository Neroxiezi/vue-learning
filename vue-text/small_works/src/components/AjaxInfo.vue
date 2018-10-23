<template>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Ajax 模拟请求数据</h3>
            </div>
            <div class="panel-body">
                <button class="btn btn-info" @click="nextPage">下一页</button>
                <table class="table table-condensed table-hover">
                    <thead>
                        <tr>
                            <th>创建时间</th>
                            <th>类型</th>
                            <th>图片</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in list">
                            <td>{{item.createdAt}}</td>
                            <td>{{item.type}}</td>
                            <td><img :src="item.url" alt=""> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      url: "https://www.apiopen.top/meituApi?page=",
      page: 0
    };
  },

  created() {
      this.get()
  },
  methods: {
    nextPage: function() {
      this.page++;
      this.get()
    },
    get() {
      this.$http.get(this.url + this.page).then(function(res) {
        var result = res.body;
        if (result.code == 200) {
          console.log(result.data);
          this.list = result.data;
        }
      });
    }
  }
};
</script>
<style lang="less">
.container {
  text-align: left;
  table {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>