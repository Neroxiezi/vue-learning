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
        <el-row>
            <el-radio-group v-model="radio9" size="small">
                <el-radio label="1" border>备选项1</el-radio>
                <el-radio label="2" border disabled>备选项2</el-radio>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio10" size="mini" disabled>
                <el-radio label="1" border>备选项1</el-radio>
                <el-radio label="2" border>备选项2</el-radio>
            </el-radio-group>
        </el-row>
        <hr>
        <span>多选框</span>
        <el-row>
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </el-row>
        <el-row>
            <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        </el-row>
        <!-- 多选框组 -->
        <el-row>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </el-row>
        <!-- 按钮多选 -->
        <el-row>
            <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
        <hr>
        <span>input</span>
        <el-row>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
            <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
            <!-- 带 icon 的输入框 -->
            <div class="demo-input-suffix">
                属性方式：
                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2"></el-input>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
            </div>
            <div class="demo-input-suffix">
                slot 方式：
                <el-input placeholder="请选择日期" v-model="input22">
                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
                <el-input placeholder="请输入内容" v-model="input23">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <!-- textarea -->
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
            </el-input>
        </el-row>
    </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
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
      radio9: "2",
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ["选中且禁用", "复选框 B"],
      checkAll: false,
      isIndeterminate: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      checkboxGroup1: ["上海"],
      input: "",
      input1: "",
      input10: "",
      input2: "",
      input21: "",
      input22: "",
      input23: "",
      textarea: ""
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
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
    .demo-input-suffix {
      text-align: left;
    }
  }
}
</style>
