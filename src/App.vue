<template>
  <div id="app103">
    <div id="header_div_ewrqwluevhtnwerlfsewrw">
      <img src="https://www.hualigs.cn/image/609f9a2709c53.jpg" alt="菜单图标" @click="menuClick">
      <span>{{today.year}}年{{today.month}}月</span>
      <img src="https://www.hualigs.cn/image/60a06e70d3e0b.jpg" alt="日历图标" @click="bodyClick">
      <img src="https://www.hualigs.cn/image/609f9a270b171.jpg" alt="搜索图标" @click="searchClick">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      host: 'http://localhost:8080/',
      today: {
        year: '2021',
        month: '5',
        day: '15',
      }
    }
  },
  methods: {
    menuClick: function () {
      this.$router.replace("/menu");
    },
    bodyClick: function () {
      this.$router.replace("/body/monthview");
    },
    searchClick: function () {
      this.$router.replace("/menu");
    },
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
#header_div_ewrqwluevhtnwerl > span {
  margin: 0px 25px;
}
</style>
