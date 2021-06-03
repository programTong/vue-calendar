<template>
  <div>
    <div id="header_div_ewrqwluevhtnwerl">
      <div id="span_body_div_erwevsdcwswerwer">
        <span>{{date.year}}年{{date.month}}月</span>
        <span>
          <img src="https://www.hualigs.cn/image/60a0d7d5b104f.jpg" alt="前一个" @click="backClick">
          <img src="https://www.hualigs.cn/image/60a0d7d5b269d.jpg" alt="后一个" @click="nextClick">
        </span>
      </div>
      <div id="span_body_div_erwevsdcws">
<!--        <span @click="monthClick">月</span>-->
<!--        <span @click="weekClick">周</span>-->
<!--        <span @click="dayClick">日</span>-->
<!--        <span @click="recordClick">日程</span>-->
      </div>
    </div>
    <router-view id="body_router_view_ertoucxvlwer"></router-view>
  </div>
</template>

<script>
export default {
  name: "Body",
  data(){
    return {
      date: {
        year: 2021,
        month: 2,
        day: 15,
      }
    }
  },
  components: {

  },
  methods: {
    backClick: function () {
      this.date.month= parseInt(this.date.month)-1;
      if (this.date.month === 0){
        this.date.month=12;
        this.date.year=this.date.year-1;
      }
      this.$router.replace({path: '/body/empty'});
      this.monthClick();
    },
    nextClick: function () {
      this.date.month= parseInt(this.date.month)+1;
      if (this.date.month === 13){
        this.date.month=1;
        this.date.year=this.date.year+1;
      }
      this.$router.replace({path: '/body/empty'});
      this.monthClick();
    },
    monthClick: function () {
      this.$router.replace({
        path: "/body/monthview",
        query: {
          year: this.date.year,
          month: this.date.month,
          day: 1,
        }
      })
    },
    // dayClick: function () {
    //   this.$router.replace("/body/dayview")
    // },
    // weekClick: function () {
    //   this.$router.replace("/body/weekview")
    // },
    // recordClick: function () {
    //   this.$router.replace("/body/recordview")
    // },

  },
  beforeRouteEnter(to, from, next) {
    let date_erwe = new Date();
    next(vm => {
      vm.date.year=date_erwe.getFullYear();
      vm.date.month=date_erwe.getMonth()+1;
      vm.date.day=date_erwe.getDate();
    });
  }
}
</script>

<style scoped>
#span_body_div_erwevsdcws>*{
  margin: 0px 26px;
}
#span_body_div_erwevsdcwswerwer>span{
  margin: 0px 60px;
}
</style>
