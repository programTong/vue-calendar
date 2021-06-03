<template>
  <div id="add_record_div_erfovxujlewrioewrtwe">
    <div id="add_record_div_erfovxujlewr">
      <img @click="cancelClick" src="" alt="返回">
      <img @click="deleteClick" src="" alt="删除日程">
    </div>
    <div>
      <img src="https://ae01.alicdn.com/kf/U189d880af1f2449ca282ddf7a16e20e8z.jpg" alt="">
      <input type="text" placeholder="标题" id="input_div_add_record_dfakwer_title" :value="title">
    </div>
    <div>
      <img src="https://ae01.alicdn.com/kf/U9eb85fd49ad94ad38d45b8128810a4bcc.jpg" alt="">
      <input type="text" placeholder="地点" id="input_div_add_record_dfakwer_location" :value="location">
    </div>
    <div id="div_addrecord_dfosduw">
      <div>
        <img src="https://ae01.alicdn.com/kf/U6bd6e17fe0ec406a986bf3527dab25a9T.jpg" alt="">
        <span>
          <input type="text" placeholder="年" id="input_div_add_record_dfakwer_year" :value="year">
          <input type="text" placeholder="月" id="input_div_add_record_dfakwer_month" :value="month">
          <input type="text" placeholder="日" id="input_div_add_record_dfakwer_day" :value="day">
        </span>
      </div>
      <div>
        <span>
          <span>开始</span>
          <input type="text" placeholder="小时(24小时制)" id="input_div_add_record_dfakwer_startTimeHour" :value="startTimeHour">
          <input type="text" placeholder="分钟" id="input_div_add_record_dfakwer_startTimeMinute" :value="startTimeMinute">
        </span>
      </div>
      <div>
        <span>
          <span>结束</span>
          <input type="text" placeholder="小时(24小时制)" id="input_div_add_record_dfakwer_endTimeHour" :value="endTimeHour">
          <input type="text" placeholder="分钟" id="input_div_add_record_dfakwer_endtTimeMinute" :value="endTimeMinute">
        </span>
      </div>
    </div>
    <div>
      <img src="" alt="详细图标">
      <input type="text" placeholder="详细" id="input_div_add_record_dfakwer_detail" :value="detail">
    </div>

  </div>
</template>

<script>
import GlobalVar from "../js/GlobalVar";

export default {
  name: "RecordView",
  data(){
    return {
      title: "",
      location: "",
      year: 2021,
      month: 6,
      day: 4,
      startTimeHour: 20,
      startTimeMinute: 10,
      endTimeHour: 20,
      endTimeMinute: 20,
      detail: "detail01"
    }
  },
  methods: {
    cancelClick: function(){
      this.$router.replace(
          {
            path: "/body/monthview",
            query: {
             year: GlobalVar.record.year,
             month: GlobalVar.record.month,
             day: GlobalVar.record.day,
          }
      })
    },
    deleteRecordRequest: function (){
      return fetch('http://127.0.0.1:8080/record/', {
        method: 'delete',
        headers: {
          'Authorization': GlobalVar.role+" "+GlobalVar.token,
          'content-type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify({
          user_id: GlobalVar.uid,
          title: this.title,
          location: this.location,
          year: this.year,
          month: this.month,
          day: this.day,
          startTimeHour: this.startTimeHour,
          startTimeMinute: this.startTimeMinute,
          endTimeHour: this.endTimeHour,
          endTimeMinute: this.endTimeMinute,
          detail: this.detail,
        }),

      })
    },
    deleteClick: async function (){
      let response = await this.deleteRecordRequest();
      response.json().then(json => {
        if (json.flag === true){
          this.cancelClick();
        }else{
          alert("删除日程失败");
        }
      }).catch(e => {
        console.log(e);
        alert("删除日程失败");
      })
    },
  },
  beforeMount() {
    this.title=GlobalVar.record.title;
    this.location=GlobalVar.record.location;
    this.year=GlobalVar.record.year;
    this.month=GlobalVar.record.month;
    this.day=GlobalVar.record.day;
    this.startTimeHour=GlobalVar.record.startTimeHour;
    this.startTimeMinute=GlobalVar.record.startTimeMinute;
    this.endTimeHour=GlobalVar.record.endTimeHour;
    this.endTimeMinute=GlobalVar.record.endTimeMinute;
    this.detail=GlobalVar.record.detail;
  }
}
</script>

<style scoped>
#add_record_div_erfovxujlewrioewrtwe input{
  margin: 10px 0px;
}
#add_record_div_erfovxujlewr > * {
  margin: 0px 30px;
}
#div_addrecord_dfosduw>div>span>input{
  width: 25%;
}
</style>
