<template>
  <div id="app">
    <div class="container">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">书籍列表</h3>
        </div>
        <div class="panel-body">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">列表</h3>
            </div>
            <div class="panel-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>书名</th>
                    <th>作者</th>
                    <th>价格</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="book in books">
                    <td>{{book.id}}</td>
                    <td><span class="label label-info">{{book.name}}</span></td>
                    <td>{{book.author}}</td>
                    <td>{{book.price}}</td>
                    <td>
                      <template v-if="book.id%2==0">
                        <button type="button" class="btn btn-success" @click="delBook(book)">删除</button>
                      </template>
                      <template v-else>
                        <button type="button" class="btn btn-danger" @click="delBook(book)">删除</button>
                      </template>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-right" colspan="5">
                      <h4>总价：{{sum}}</h4>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">添加</h3>
            </div>
            <div class="panel-body">
              <form action="" method="POST" role="form">
                <legend>添加书籍</legend>

                <div class="form-group">
                  <label for="">书名</label>
                  <input type="text" class="form-control" id="" placeholder="Input field" v-model="book.name">
                </div>
                <div class="form-group">
                  <label for="">作者</label>
                  <input type="text" class="form-control" id="" placeholder="Input field" v-model="book.author">
                </div>
                <div class="form-group">
                  <label for="">价格</label>
                  <input type="number" class="form-control" id="" placeholder="Input field" v-model="book.price">
                </div>
                <button type="button" class="btn btn-primary" @click="addBook()">添加</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sortparam: "",
      book: {
        id: 0,
        author: "",
        name: "",
        price: ""
      },
      books: [
        {
          id: 1,
          author: "曹雪芹",
          name: "红楼梦",
          price: 32.0
        },
        {
          id: 2,
          author: "施耐庵",
          name: "水浒传",
          price: 30.0
        },
        {
          id: "3",
          author: "罗贯中",
          name: "三国演义",
          price: 24.0
        },
        {
          id: 4,
          author: "吴承恩",
          name: "西游记",
          price: 20.0
        }
      ]
    };
  },
  computed: {
    sum: function() {
      var result = 0;
      for (var i = 0; i < this.books.length; i++) {
        result += Number(this.books[i].price);
      }
      return result;
    }
  },
  methods: {
    addBook: function() {
      this.book.id = this.books.length + 1;
      this.books.push(this.book);
      this.book = "";
    },
    delBook: function(book) {
      var index = this.books.indexOf(book);
      this.books.splice(index, 1);
    }
  }
};
</script>
<style lang="less">
#app {
  .container {
    text-align: left;
  }
}
</style>
