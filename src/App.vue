<template>
  <div id="app103">
    <div id="header_div_ewrqwluevhtnwerlfsewrw">
      <img src="https://www.hualigs.cn/image/609f9a2709c53.jpg" alt="菜单图标" @click="menuClick">
      <span>{{date.year}}年{{date.month}}月{{date.day}}日</span>
      <img src="https://www.hualigs.cn/image/60a06e70d3e0b.jpg" alt="日历图标" @click="bodyClick">
      <img src="https://www.hualigs.cn/image/609fb1efba01c.jpg" alt="添加事件"  @click="addRecordClick">
      <img src="https://www.hualigs.cn/image/609f9a270b171.jpg" alt="搜索图标" @click="searchClick">
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      host: 'http://localhost:8080/',
      date: {
        year: 2021,
        month: 2,
        day: 15,
      }
    }
  },
  methods: {
    menuClick: function () {
      this.$router.replace("/menu");
    },
    bodyClick: function () {
      this.$router.replace("/body");
    },
    searchClick: function () {
      this.$router.replace("/search");
    },
    addRecordClick: function () {
      this.$router.replace("/addrecordview")
    },
    loadToday: function (){
      let date_erwe = new Date();
      this.date.year=date_erwe.getFullYear();
      this.date.month=date_erwe.getMonth()+1;
      this.date.day=date_erwe.getDate();
    }
  },
  mounted() {
    this.loadToday();
  },
  components: {
  },
}
</script>

<style>
#app103{
  height: 600px;
  width: 400px;
  margin-left: 400px;
  border: 5px #000000 solid;
  padding: 20px 20px;
}
img{
  width: 20px;
  height: 20px;
}
#header_div_ewrqwluevhtnwerlfsewrw > * {
  margin: 0px 26px;
}
</style>
