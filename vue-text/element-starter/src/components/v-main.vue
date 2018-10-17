<template>
    <el-tabs type="border-card">
        <el-tab-pane label="个人信息">
            <el-container>
                <el-aside class="el-aside-content" width="200px">
                    <el-rate v-model="value2" show-text></el-rate>
                </el-aside>
                <el-main class="el-main-content">
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                    </el-card>
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
      value1: null,
      value2: null
    };
  }
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>