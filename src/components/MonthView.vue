<template>
  <div>
    <table>
      <thead>
        <th v-for="day_week_name in week_name">{{day_week_name}}</th>
      </thead>
      <tbody>
        <tr v-for="(i, value_i) in arr7">
          <td v-for="(j, value_j) in arr6">
            <div>{{day_num_42[i*7+j]}}</div>
            <div>{{day_lunar_42[i*7+j]}}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <Record :records="records" :index_today="index_today"/>
  </div>
</template>

<script>
import Record from "./Record.vue";
export default {
  name: "MonthView",
  data() {
    return {
      week_name: ['日','一','二','三','四','五','六'],
      arr7: ['','','','','','','7'],
      arr6: ['','','','','','6'],
      day_num_42: ['','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7'],
      day_lunar_42: ['','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7', '','','','','','','7'],
      records:{},
      index_today: 1,
    }
  },
  components: {
    Record
  }
}
</script>

<style scoped>

</style>
