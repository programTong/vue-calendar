<template>
  <div id="app103">
    <div id="header_div_ewrqwluevhtnwerlfsewrw">
<!--      <img src="https://www.hualigs.cn/image/609f9a2709c53.jpg" alt="菜单图标" @click="menuClick">-->
      <span>{{cur_date.year}}年{{cur_date.month}}月{{cur_date.day}}日</span>
      <img src="https://www.hualigs.cn/image/60a06e70d3e0b.jpg" alt="日历图标" @click="index=0;;view();">
<!--      <img src="https://www.hualigs.cn/image/609f9a270b171.jpg" alt="搜索图标" @click="searchClick">-->
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzcyMTQ5MzU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODE5LjI5MiA2MjMuNzg1Yy00MC44NDQtNDAuODQ0LTg4LjM4Ny03Mi41NDctMTQwLjE1MS05NC4xMDIgNjkuNTg3LTUxLjM5MiAxMTQuODA5LTEzMy45NyAxMTQuODA5LTIyNi45MjEgMC0xNTUuNDY3LTEyNi40ODMtMjgxLjk1MS0yODEuOTUxLTI4MS45NTFzLTI4MS45NTEgMTI2LjQ4My0yODEuOTUxIDI4MS45NTFjMCA5Mi45NSA0NS4yMjEgMTc1LjUyOSAxMTQuODA5IDIyNi45MjEtNTEuNzYyIDIxLjU1NS05OS4zMDggNTMuMjYtMTQwLjE1MSA5NC4xMDItODIuMDgwIDgyLjA4MC0xMjcuMjg0IDE5MS4yMTMtMTI3LjI4NCAzMDcuMjkyIDAgMzIuMTc0IDI2LjA4MiA1OC4yNTQgNTguMjU0IDU4LjI1NHM1OC4yNTQtMjYuMDgwIDU4LjI1NC01OC4yNTRjMC0xNzUuMzg1IDE0Mi42ODUtMzE4LjA2OCAzMTguMDY4LTMxOC4wNjggMTc1LjM4NSAwIDMxOC4wNjggMTQyLjY4NSAzMTguMDY4IDMxOC4wNjggMCAzMi4xNzQgMjYuMDgwIDU4LjI1NCA1OC4yNTQgNTguMjU0czU4LjI1NC0yNi4wODAgNTguMjU0LTU4LjI1NGMwLTExNi4wODEtNDUuMjA0LTIyNS4yMTEtMTI3LjI4NC0zMDcuMjkyek01MTIgMTM3LjMyYzkxLjIyNSAwIDE2NS40NDIgNzQuMjE4IDE2NS40NDIgMTY1LjQ0MnMtNzQuMjE4IDE2NS40NDItMTY1LjQ0MiAxNjUuNDQyLTE2NS40NDItNzQuMjE4LTE2NS40NDItMTY1LjQ0MiA3NC4yMTgtMTY1LjQ0MiAxNjUuNDQyLTE2NS40NDJ6IiBwLWlkPSIyNTA1Ij48L3BhdGg+PC9zdmc+"
           alt="登录图标" @click="index=1;view();">
      <img src="data:image/png;base64,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"
           alt="注册图标" @click="index=2;view();">
    </div>
    <div id="div_app_weoruxvjowrwu">
      <Body :user_auth_data_of_father="user_auth_data" :today_of_father="today" :cur_date="cur_date"
        @skip_date="deal_skip_date" :host_of_father="host" ref="body" @cur_day="deal_cur_day"
      />
      <Login :host="host" @user_auth_data="load_user_auth_data"/>
      <Register :host="host" @ready_login="to_login"/>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Body from "./components/Body.vue";
import Config from "./config/config";

export default {
  name: 'App',
  data() {
    return {
      host: Config.host,
      index: 1,
      user_auth_data: {
        token: "",
        uid: -1,
        role: "",
        username: "",
      },
      today: {
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        day: new Date().getDate(),
      },
      cur_date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        day: new Date().getDate()
      }
    }
  },
  methods: {
    deal_cur_day: function (data){
      if (data.cur_day!==undefined){
        let data0 = {
          cur_day: data.cur_day,
        }
        this.$emit("cur_day",data0);
      }
    },
    fun_wrouvjw: function (){
      this.$refs.body.load_month_view();
    },
    deal_skip_date: function (data){
      if (data.skip_date!==undefined){
        this.cur_date=data.skip_date;
      }
      setTimeout(this.fun_wrouvjw,100);
    },
    fun_bbafowejr: function (){
      this.index=1;
      this.view();
    },
    to_login: function (data){
      if (data.ready_login!==undefined && data.ready_login===true){
        setTimeout(this.fun_bbafowejr,2000);
      }
    },
    fun_aa345ovjowe: function (){
      this.$refs.body.load_month_view();
      this.index=0;
      this.view();
    },
    load_user_auth_data: function (data){
      if (data.user_auth_data !== undefined){
        this.user_auth_data=data.user_auth_data;
        setTimeout(this.fun_aa345ovjowe,2000);
      }
    },
    fun_eworncv: function (){
      this.$refs.body.load_month_view();
    },
    view: function (){
      let el = document.getElementById("div_app_weoruxvjowrwu");
      for (let i = 0; i < el.children.length; i++) {
        let child = el.children.item(i);
        child.style.display="none";
      }
      if (parseInt(this.index)===0){
        this.cur_date={
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate(),
        };
        setTimeout(this.fun_eworncv,100);
      }
      let child = el.children.item(this.index);
      child.style.display="block";
    },

  },
  components: {
    Body,
    Register,
    Login
  },
  mounted() {
    this.view();
  }
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
  margin: 0px 20px;
}
</style>
