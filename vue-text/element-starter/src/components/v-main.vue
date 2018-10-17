<template>
    <el-tabs type="border-card">
        <el-tab-pane label="个人信息">
            <el-container>
                <el-aside class="el-aside-content" width="200px">
                    <el-container>
                        <el-card class="box-card">
                            <img class="avatar rounded-2" src="https://avatars2.githubusercontent.com/u/11400329?s=400&amp;u=23c3e7553869b31bf61fc4ffb774a3ae74a12496&amp;v=4" width="200" height="200" alt="@Neroxiezi">
                        </el-card>
                    </el-container>
                </el-aside>
                <el-main class="el-main-content">
                    <ul>
                        <li><i class="fa fa-user-secret" aria-hidden="true"></i>: <span>南丞</span></li>
                    </ul>
                </el-main>
            </el-container>
        </el-tab-pane>
        <el-tab-pane label="个人博客">个人博客</el-tab-pane>
        <el-tab-pane label="个人社交">角色管理</el-tab-pane>
        <el-tab-pane label="联系方式">定时任务补偿</el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
</script>
<style>
ul li {
    list-style: none;
}
.text {
  font-size: 14px;
}

.box-card {
  width: 480px;
}
.el-card__body {
    padding: 0px;
}
</style>