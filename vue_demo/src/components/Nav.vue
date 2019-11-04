<template>
<nav class="navbar navbar-expand-md  bg-dark">
  <a class="navbar-brand  text-white" href="#">PFinal-CMS</a>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li  v-for="nav in nav_list" class="nav-item" >
      <!-- <span class="nav-item nav-link text-white" href="{{nav.route_address}}">{{nav.title}} <span class="sr-only">(current)</span></a> -->
        <router-link :to="nav.address" class="nav-link text-white"> {{nav.title}}</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
    name :"navbar",
    data() {
        return {
            nav_list: [
                {title:'首页' ,address:'/'},
                {title:'文章列表' ,address:'/article'},
            ]
        }
        
    }
    
}
</script>