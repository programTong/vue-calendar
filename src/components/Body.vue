<template>
  <div>
    <div id="header_div_ewrqwluevhtnwerl">
      <span @click="monthClick">月</span>
      <span @click="dayClick">周</span>
      <span @click="weekClick">日</span>
      <span @click="recordClick">日程</span>
      <img src="https://www.hualigs.cn/image/609fb1efba01c.jpg" alt="添加事件"  @click="addRecordClick">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Body",
  components: {

  },
  methods: {
    monthClick: function () {
      this.$router.replace("/body/monthview")
    },
    dayClick: function () {
      this.$router.replace("/body/dayview")
    },
    weekClick: function () {
      this.$router.replace("/body/weekview")
    },
    recordClick: function () {
      this.$router.replace("/body/recordview")
    },
    addRecordClick: function () {
      this.$router.replace("/body/addrecordview")
    },
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
