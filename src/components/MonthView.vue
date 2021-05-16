<template>
  <div id="month_view_id_108">
    <div id="month__sub__id_108">
      <table id="table_month_view_dtrwefvert">
        <thead>
        <tr>
          <th v-for="day_week_name in week_name">{{day_week_name}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in arr7">
          <td v-for="j in arr6">
            <div :id="'td_div_month_view_rfweojsres_'+(i*7+j)">
              <div @click="dateClick(i*7+j)">{{day_num_42[i*7+j]}}</div>
              <div @click="dateClick(i*7+j)" id="div_month_view_lunar_rwedkoujhofwer">{{day_lunar_42[i*7+j]}}</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div id="td_div_month_view_rfweojsres_-1"></div>
    </div>
    <Record :records="month_records[index]" :index="index"/>
  </div>
</template>

<script>
import Record from "./Record.vue";
export default {
  name: "MonthView",
  components: {
    Record
  },
  data() {
    return {
      week_name: ['日','一','二','三','四','五','六'],
      arr7: [0,1,2,3,4,5,6,7],
      arr6: [0,1,2,3,4,5,6],
      day_num_42: ['','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7'],
      day_lunar_42: ['','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7'],
      month_records:[],
      index: 0,
      host: 'http://localhost:8080/',
      date: {
        year: '',
        month: '',
        day: ''
      },
      active_date_el: 'td_div_month_view_rfweojsres_-1',
    }
  },
  methods: {
    loadMonthView: function () {
      fetch(this.host+"month/"+this.date.year+"-"+this.date.month+"-"+this.date.day,
          {
            headers: {
              'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
            },
            method: 'GET'
          }
      ).then(response => {
          return response.json();
      }).then(data => {
          for (let i=0; i<data.dayViews.length;i++) {
            this.day_num_42[i]=data.dayViews[i].day;
            this.day_lunar_42[i] = data.dayViews[i].chineseDay;
            let records = data.dayViews[i].records;
            this.month_records.push(records);
          }
      }).catch(e => {
        console.log(e);
      })
    },
    dateClick: function (index){
      let old = document.getElementById(this.active_date_el);
      old.style.color='#000000';
      this.active_date_el="td_div_month_view_rfweojsres_"+index;
      this.index = index;
      let el = document.getElementById(this.active_date_el);
      el.style.color='#ff0000';
    },
  },
  // mounted() {
  //   this.loadMonthView();
  // },
  beforeRouteEnter(to, from, next) {
    if (to.query.year === undefined) {
      let date_erwe = new Date();
      next(vm => {
        vm.date.year=date_erwe.getFullYear();
        vm.date.month=date_erwe.getMonth()+1;
        vm.date.day=date_erwe.getDate();
        vm.loadMonthView();
      });
    } else {
      next(vm => {
        vm.date.year=to.query.year;
        vm.date.month=to.query.month;
        vm.date.day=to.query.day;
        vm.loadMonthView();
      });
    }
  }
}
</script>

<style scoped>
#month__sub__id_108{
  text-align: center;
}
#table_month_view_dtrwefvert{
  width: 96%;
}
#div_month_view_lunar_rwedkoujhofwer{
  font-size: 40%;
}
</style>
