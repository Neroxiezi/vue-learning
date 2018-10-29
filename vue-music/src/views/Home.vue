<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <i class="fa fa-bars" @click="user_info"></i>
        </li>
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
    <div class="main">
      <div class="banner">
        <el-carousel indicator-position="none" height="100%">
          <el-carousel-item v-for="(item,index) in banners" :key="index">
            <img :src="item.img" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="content">
        <el-row>
          <el-card class="title" shadow="always">
            <h1>推荐歌单</h1>
          </el-card>
        </el-row>
        <el-row>
          <ul class="musics_list">
            <li v-for="(item,index) in musics" :key="index">
                <img :src="item.pic_s192" alt="">
                <div class="info">
                  <ol v-for="(items,indexs) in item.content" :key="indexs">
                    <span>{{indexs + 1}}.</span>
                    <span>{{items.album_title}} - {{items.author}}</span>
                  </ol>
                </div>
            </li>
          </ul>
        </el-row>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      banners: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540570152408&di=b7768035fa6b0a9ed1f11efd5854a639&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e33259521886a8012193a3f064c6.jpg"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540570152408&di=b7768035fa6b0a9ed1f11efd5854a639&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e33259521886a8012193a3f064c6.jpg"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540570152408&di=b7768035fa6b0a9ed1f11efd5854a639&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e33259521886a8012193a3f064c6.jpg"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540570152408&di=b7768035fa6b0a9ed1f11efd5854a639&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e33259521886a8012193a3f064c6.jpg"
        }
      ],
      musics: [],
      transitionName: "fold-left"
    };
  },
  created() {
    this.axios
      .get("http://api.apiopen.top/musicRankings")
      .then(result => {
        //console.log(result)
        if (result.data.code == 200) {
          this.musics = result.data.result;
        }
        console.log(this.musics);
      })
      .catch(err => {});
  },
  methods: {
    user_info() {
      this.$router.push({ name: "user" });
    }
  },
  watch: {
    // watch $route 决定使用哪种过渡
    $route(to, from) {
      console.log(to);
      //to、from是最基本的路由对象，分别表示从(from)某个页面跳转到(to)另一个页面,to.path（表示要跳转到的路由地址），from.path同理。
      // const routerDeep = ["/", "/user"];
      // //找到to.path和from.path在routerDeep数组中的下标
      // const toDepth = routerDeep.indexOf(to.path);
      // const fromDepth = routerDeep.indexOf(from.path);
      // this.transitionName = toDepth > fromDepth ? "fold-left" : "fold-right";
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background: #f2f3f4;
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

        color: #ffffff;
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
  .main {
    .banner {
      .el-carousel {
        height: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .musics_list {
      li {
        margin: 0 10px;
        padding: 3px 0;
        border-bottom: 1px solid #e4e4e4;
        background-color: #ebeef5;
        display: flex;
          
          img {
            flex: 1;
            width: 100px;
            height: 100px;
            border-radius: 3px;
          }
          .info {
            flex: 4;
            padding: 0 20px;
            height: 100px;
            overflow: hidden;
            color: #2e3030;
            font-size: 12px;
            ol {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              height: 25px;
              line-height: 25px;
            }
          }
      }
    }
  }
  .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: 0.3s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: 0.3s;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }
  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: 0.3s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: 0.3s;
  }
  @keyframes fold-right-in {
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }
}
</style>

