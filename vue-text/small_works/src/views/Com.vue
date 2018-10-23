<template>
    <div id="app">
        <div class="container">
            <my-tabs :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
                <keep-alive>
                    <component :is="currentContent">
                    </component>
                </keep-alive>
            </my-tabs>
        </div>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs";
import One from "@/components/One";
import Two from "@/components/Two";
export default {
  components: {
    "my-tabs": Tabs,
    one: One,
    two: Two
  },
  data() {
    return {
      tabIndex: 0,
      currentContent: "one",
      tabList: [
        {
          index: 0,
          name: "选项一",
          component: "one"
        },
        {
          index: 1,
          name: "选项二",
          component: "two"
        }
      ]
    };
  },
  methods: {
    // 切换选项卡
    changeTab: function(tab) {
      this.tabIndex = tab.index;
      this.currentContent = tab.component;
    }
  }
};
</script>
<style>
</style>