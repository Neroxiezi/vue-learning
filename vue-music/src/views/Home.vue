<template>
    <div id="app">
        <header>
            <ul>
                <li><i class="fa fa-bars"></i> </li>
                <li>Music 故事</li>
                <li><i class="fa fa-search"></i></li>
            </ul>
        </header>
        <div class="tab">
            <ul>
                <li :class="isActive?'active':''">
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/">排行</router-link>
                </li>
                <li>
                    <router-link to="/">歌手</router-link>
                </li>
            </ul>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true
    };
  },
  created() {
      console.log(this.$route);
  }
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
  }
  ul {
    li {
      list-style: none;
    }
  }
  header {
    position: relative;
    height: 44px;
    width: 100%;
    text-align: center;
    background: #d44439;
    ul {
      display: flex;
      li {
        flex: 1;
        color: #ffffff;
        font-weight: 700;
        line-height: 44px;
        font-size: 20px;
        i {
          display: block;
          font-size: 18px;
          line-height: 44px;
        }
        .fa-bars {
          width: 30%;
          margin-left: 10px;
        }
        .fa-search {
          width: 30%;
          margin-left: 60px;
        }
      }
    }
  }
  .tab {
    line-height: 44px;
    height: 44px;
    width: 100%;
    background: #d44439;
    ul {
      display: flex;
      li {
        line-height: 44px;
        flex: 1;
        text-align: center;
        font-size: 14px;
        a {
          color: #e4e4e4;
          font-weight: 700;
        }
      }
      .active {
        a {
          padding-bottom: 3px;
          border-bottom: 2px solid #f1f1f1;
        }
      }
    }
  }
}
</style>

