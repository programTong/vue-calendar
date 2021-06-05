<template>
  <div id="month_view_id_108">
    <div id="month__sub__id_108">
      <table id="table_month_view_dtrwefvert">
        <thead>
        <tr>
          <th v-for="day_week_name in week_name">{{ day_week_name }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in arr7">
          <td v-for="j in arr6">
            <div :id="'td_div_month_view_rfweojsres_'+(i*7+j)">
              <div @click="dateClick(i*7+j)">{{ day_num_42[i * 7 + j] }}</div>
              <div @click="dateClick(i*7+j)" id="div_month_view_lunar_rwedkoujhofwer">{{ day_lunar_42[i * 7 + j] }}
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div id="td_div_month_view_rfweojsres_-1"></div>
    </div>
    <div v-for="record in month_records[index]" class="div_record_110">
      <Record :record="record" @view_record="viewRecord(record)"/>
    </div>
  </div>
</template>

<script>
import Record from "./Record.vue";
export default {
  name: "MonthView",
  props:{
    user_auth_data_of_father: {
    },
    today_of_father: {
    },
    cur_date_of_father: {
    },
    host_of_father: "",
  },
  components: {
    Record
  },
  data() {
    return {
      week_name: ['日', '一', '二', '三', '四', '五', '六'],
      arr7: [0, 1, 2, 3, 4, 5, 6, 7],
      arr6: [0, 1, 2, 3, 4, 5, 6],
      day_num_42: ['', '', '', '', '', '', '请', '', '', '', '', '', '', '登', '', '', '', '', '', '', '录', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      day_lunar_42: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      month_records: [],
      index: 0,
      todayIndex: 0,
      dayCount: 0,
      beginOfMonthIndex: 0,
      active_date_el: 'td_div_month_view_rfweojsres_-1',
      cur_date: {
      }
    }
  },
  methods: {
    monthViewRequest: function () {
      return fetch(this.host_of_father + "/month/monthView?" + "year="+this.cur_date_of_father.year + "&month=" + this.cur_date_of_father.month + "&day=" + this.cur_date_of_father.day+"&uid="+this.user_auth_data_of_father.uid,
          {
            headers: {
              'Authorization': this.user_auth_data_of_father.role+" "+this.user_auth_data_of_father.token,
              'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
            },
            method: 'GET',
            mode: 'cors'
          }
      );
    },
    dealMonthViewRequest: async function () {
      this.cur_date=this.cur_date_of_father;
      let response = await this.monthViewRequest();
      response.json().then(json => {
        let data = json.data;
        console.log(json);
        this.index = data.todayIndex;
        this.todayIndex = data.todayIndex;
        this.dayCount = data.dayCount;
        this.beginOfMonthIndex = data.beginOfMonthIndex;
        this.starToday();
        this.month_records = [];
        for (let i = 0; i < data.dayViews.length; i++) {
          this.day_num_42[i] = data.dayViews[i].day;
          this.day_lunar_42[i] = data.dayViews[i].chineseDay;
          let records = data.dayViews[i].records;
          this.month_records.push(records);
        }
      }).catch(e => {
        console.log(e);
      })
    },
    starToday: function (){
      let old = document.getElementById(this.active_date_el);
      old.style.color = '#000000';
      old.style.fontSize = '16px';
      this.active_date_el='td_div_month_view_rfweojsres_'+this.index;
      let el = document.getElementById(this.active_date_el);
      el.style.color = '#4169E1';
      el.style.fontSize = '20px';
    },
    dateClick: function (index) {
      this.cur_date=this.cur_date_of_father;
      let old = document.getElementById(this.active_date_el);
      old.style.color = '#000000';
      old.style.fontSize = '16px';
      this.active_date_el = "td_div_month_view_rfweojsres_" + index;
      this.index = index;
      let el = document.getElementById(this.active_date_el);
      el.style.color = '#4169E1';
      el.style.fontSize = '20px';
      index=parseInt(index);
      this.cur_date.day=this.day_num_42[index];
      if (index <parseInt(this.beginOfMonthIndex)){
        this.cur_date.month= parseInt(this.cur_date.month)-1;
        if (this.cur_date.month === 0){
          this.cur_date.month=12;
          this.cur_date.year=parseInt(this.cur_date.year)-1;
        }
        let a_data = {
          skip_date: this.cur_date
        }
        this.$emit("skip_date",a_data);
      }else if (index>=parseInt(this.beginOfMonthIndex)+parseInt(this.dayCount)){
        this.cur_date.month= parseInt(this.cur_date.month)+1;
        if (this.cur_date.month === 13){
          this.cur_date.month=1;
          this.cur_date.year=this.cur_date.year+1;
        }
        let a_data = {
          skip_date: this.cur_date
        }
        this.$emit("skip_date",a_data);
      }else {
        let data = {
          cur_day: this.cur_date.day,
        }
        this.$emit("cur_day",data);
      }
    },
    viewRecord: function (record){
        let data0 = {
          record: record
        };
        this.$emit("view_record",data0);
    }
  },
}
</script>

<style scoped>
#month__sub__id_108 {
  text-align: center;
}

#table_month_view_dtrwefvert {
  width: 96%;
}

#div_month_view_lunar_rwedkoujhofwer {
  font-size: 40%;
}
.div_record_110{
  border: 2px #000000 solid;
  margin-bottom: 4px;
}
</style>
