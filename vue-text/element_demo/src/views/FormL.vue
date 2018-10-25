<template>
    <div class="container">
        <el-row>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-row>
        <!-- 选中禁用状态 -->
        <el-row>
            <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
            <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
        </el-row>

        <!-- 单选框组 -->
        <el-row>
            <el-radio-group v-model="radio2">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
            </el-radio-group>
        </el-row>
        <!-- 按钮样式选择 -->
        <el-row>
            <el-radio-group v-model="radio3">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio4" size="medium">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio5" size="small">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京" disabled></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio6" disabled size="mini">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <!-- 带有边框的 -->
        <el-row>
            <el-radio v-model="radio7" :label='1' border>备选项1</el-radio>
            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
        </el-row>
        <el-row>
            <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
            <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      radio1: "选中且禁用",
      radio2: 3,
      radio3: "广州",
      radio4: "广州",
      radio5: "广州",
      radio6: "广州",
      radio7: 1,
      radio8: "1",
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 40px auto;
  .el-row {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
