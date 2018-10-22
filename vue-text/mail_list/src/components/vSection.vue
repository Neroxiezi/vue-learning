<template>
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title"> <i class="fa fa-list-alt" aria-hidden="true"></i> 文章列表</h3>
            </div>
            <div class="panel-body">
                <div class="list-group" v-for="article in articles">
                    <a href="#" class="list-group-item">
                        <h4 class="list-group-item-heading" style="font-weight: 600;">{{article.title}}</h4>
                        <p class="list-group-item-text" style="margin-top:.5rem">{{article.desc}}</p>
                        <p style="margin-top:.5rem"><i class="fa fa-user" aria-hidden="true"></i> 南丞 <i class="fa fa-calendar" aria-hidden="true"></i></p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "PHP运行原理",
          desc:
            "PHP是一种适用于web开发的动态语言。具体点说，就是一个用C语言实现包含大量组件的软件框架。更狭义点看，可以把它认为是一个强大的UI框架。了解PHP底层实现的目的是什么？动态语言要像用好首先得了解它，内存管理、框架模型值得我们借鉴，通过扩展开发实现更多更强大的功能，优化我们程序的性能。",
          author: "南丞",
          time: "2018-10-1"
        },
        {
          title: "PHP运行原理",
          desc:
            "PHP是一种适用于web开发的动态语言。具体点说，就是一个用C语言实现包含大量组件的软件框架。更狭义点看，可以把它认为是一个强大的UI框架。了解PHP底层实现的目的是什么？动态语言要像用好首先得了解它，内存管理、框架模型值得我们借鉴，通过扩展开发实现更多更强大的功能，优化我们程序的性能。",
          author: "南丞",
          time: "2018-10-1"
        },
        {
          title: "PHP运行原理",
          desc:
            "PHP是一种适用于web开发的动态语言。具体点说，就是一个用C语言实现包含大量组件的软件框架。更狭义点看，可以把它认为是一个强大的UI框架。了解PHP底层实现的目的是什么？动态语言要像用好首先得了解它，内存管理、框架模型值得我们借鉴，通过扩展开发实现更多更强大的功能，优化我们程序的性能。",
          author: "南丞",
          time: "2018-10-1"
        }
      ]
    };
  }
};
</script>
<style>
</style>