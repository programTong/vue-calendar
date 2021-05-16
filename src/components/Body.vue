<template>
  <div>
    <div id="header_div_ewrqwluevhtnwerl">
      <span>月</span><span>周</span><span>日</span><span>日程</span><img src="https://www.hualigs.cn/image/609fb1efba01c.jpg" alt="添加事件">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TimeCategoryView from "./TimeCategoryView.vue";
export default {
  name: "Body",
  components: {
    TimeCategoryView
  },
  methods: {
    monthClick: function () {
      this.$router.replace("/body/monthview")
    }
  }
}
</script>

<style scoped>
#header_div_ewrqwluevhtnwerl{
  width: 90%;
}
#header_div_ewrqwluevhtnwerlfsewrw>span{
  margin: 0px 100px;
}
</style>
