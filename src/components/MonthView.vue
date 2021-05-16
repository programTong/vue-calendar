<template>
  <div id="month_view_id_108">
    <div id="month__sub__id_108">
      <table>
        <thead>
        <tr>
          <th v-for="day_week_name in week_name">{{day_week_name}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in arr7">
          <td v-for="j in arr6">
            <div>{{day_num_42[i*7+j]}}</div>
            <div>{{day_lunar_42[i*7+j]}}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <Record :records="month_records[index]" :index="index"/>
  </div>
</template>

<script>
import Record from "./Record.vue";
export default {
  name: "MonthView",
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
      date: '',

    }
  },
  methods: {
    loadMonthView: function () {
      fetch(this.host+"month/"+this.today.year+"-"+this.today.month+"-"+this.today.day,
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
            //TODO 农历
            this.day_lunar_42[i] = i+'农历';
            let records = data.dayViews[i].records;
            this.month_records.push(records);
          }
      }).catch(e => {
        console.log(e);
      })

    }
  },
  mounted() {
    this.loadMonthView();
  },
  components: {
    Record
  }
}
</script>

<style scoped>
#month__sub__id_108{
  text-align: center;
}

</style>
