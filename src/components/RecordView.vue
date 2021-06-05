<template>
  <div id="add_record_div_erfovxujlewrioewrtwe">
    <div id="add_record_div_erfovxujlewr">
      <img @click="cancelClick" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyODA3MzI0NTQ4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NjkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjExLjE3IDEwMC45OTdjMTYuNjEtMTUuMzU3IDQyLjUyNC0xNC4zNDIgNTcuODgxIDIuMjY4IDE1LjIwNCAxNi40NDQgMTQuMzYgNDIuMDA4LTEuNzc1IDU3LjQxOGwtMC40OTMgMC40NjQtMzgyLjQzNCAzNTMuNTg0IDM4MS42OTggMzUwLjc2OGMxNi40OSAxNS4xNTQgMTcuNzI3IDQwLjcwMSAyLjg5OCA1Ny4zNzNsLTAuNDU0IDAuNTAyYy0xNS4xNTQgMTYuNDktNDAuNyAxNy43MjctNTcuMzcyIDIuODk4bC0wLjUwMy0wLjQ1NEwxOTYuMiA1NDQuOTgzYy0xNy40NDctMTYuMDMzLTE3LjY2Mi00My40MzItMC42MTMtNTkuNzQ0bDAuNTIyLTAuNDlMNjExLjE3IDEwMC45OTZ6IiBwLWlkPSIyNDcwIj48L3BhdGg+PC9zdmc+"
           alt="返回">
      <img @click="deleteClick" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyODA3MzUyODM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyOTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODM2LjYgMTkzLjhoMTAwLjJjMTguOCAwIDMzLjktMTYuMiAzMy45LTM2LjNzLTE1LjEtMzUuMi0zMy45LTM1LjJINzI0LjlWODUuOUM3MjQuOSA0MCA2OTAgMiA2NDYuNiAySDM3Ny45Yy00Mi44IDAtNzguMyAzNy41LTc4LjMgODMuOXYzNi4zSDg3LjJjLTE4LjggMC0zMy45IDE2LjItMzMuOSAzNi4zczE1LjEgMzYuMyAzMy45IDM2LjNoMTAwLjJsNjQ5LjItMXpNODA0LjYgMjUzLjdsLTU4NS4yIDFjLTIwLjUgMC0zNy4yIDE3LjYtMzcuMiAzOS4yVjg5MGMwIDcyLjYgNTYuMyAxMzIgMTI1LjEgMTMyaDQwOS40YzY4LjggMCAxMjUuMS01OS40IDEyNS4xLTEzMlYyOTNjMC0yMS43LTE2LjctMzkuMy0zNy4yLTM5LjN6IiBwLWlkPSIzMjk1Ij48L3BhdGg+PC9zdmc+"
           alt="删除日程">
    </div>
    <div>
      <img src="https://ae01.alicdn.com/kf/U189d880af1f2449ca282ddf7a16e20e8z.jpg" alt="">
      <input readonly="readonly" type="text" placeholder="标题" id="input_div_add_record_dfakwer_title" :value="record_of_father.title">
    </div>
    <div>
      <img src="https://ae01.alicdn.com/kf/U9eb85fd49ad94ad38d45b8128810a4bcc.jpg" alt="">
      <input readonly="readonly" type="text" placeholder="地点" id="input_div_add_record_dfakwer_location" :value="record_of_father.location">
    </div>
    <div id="div_addrecord_dfosduw">
      <div>
        <img src="https://ae01.alicdn.com/kf/U6bd6e17fe0ec406a986bf3527dab25a9T.jpg" alt="">
        <span>
          <input readonly="readonly" type="text" placeholder="年" id="input_div_add_record_dfakwer_year" :value="record_of_father.year">
          <input readonly="readonly" type="text" placeholder="月" id="input_div_add_record_dfakwer_month" :value="record_of_father.month">
          <input readonly="readonly" type="text" placeholder="日" id="input_div_add_record_dfakwer_day" :value="record_of_father.day">
        </span>
      </div>
      <div>
        <span>
          <span>开始</span>
          <input readonly="readonly" type="text" placeholder="小时(24小时制)" id="input_div_add_record_dfakwer_startTimeHour" :value="record_of_father.startTimeHour">
          <input readonly="readonly" type="text" placeholder="分钟" id="input_div_add_record_dfakwer_startTimeMinute" :value="record_of_father.startTimeMinute">
        </span>
      </div>
      <div>
        <span>
          <span>结束</span>
          <input readonly="readonly" type="text" placeholder="小时(24小时制)" id="input_div_add_record_dfakwer_endTimeHour" :value="record_of_father.endTimeHour">
          <input readonly="readonly" type="text" placeholder="分钟" id="input_div_add_record_dfakwer_endtTimeMinute" :value="record_of_father.endTimeMinute">
        </span>
      </div>
    </div>
    <div>
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyODA3MzgxMzcxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3NDkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTIxLjkgMjU5LjhoNDg5LjljMzEuNSAwIDU3LjEtMjguNiA1Ny4xLTYzLjlzLTI1LjUtNjMuOS01Ny02My45aC00OTBjLTMxLjUgMC01Ny4xIDI4LjYtNTcuMSA2My45czI1LjYgNjMuOSA1Ny4xIDYzLjl6TTEyOC43IDU3NS45aDc2Ni42YzM1LjMgMCA2My45LTI4LjYgNjMuOS02My45cy0yOC42LTYzLjktNjMuOS02My45SDEyOC43Yy0zNS4zIDAtNjMuOSAyOC42LTYzLjkgNjMuOXMyOC42IDYzLjkgNjMuOSA2My45ek04OTUuMyA3NjQuMkgxMjguN2MtMzUuMyAwLTYzLjkgMjguNi02My45IDYzLjlTOTMuNCA4OTIgMTI4LjcgODkyaDc2Ni42YzM1LjMgMCA2My45LTI4LjYgNjMuOS02My45cy0yOC42LTYzLjktNjMuOS02My45eiIgcC1pZD0iMzc1MCI+PC9wYXRoPjwvc3ZnPg=="
           alt="详细图标">
      <input readonly="readonly" type="text" placeholder="详细" id="input_div_add_record_dfakwer_detail" :value="record_of_father.detail">
    </div>

  </div>
</template>

<script>

export default {
  name: "RecordView",
  props: {
    record_of_father: {},
    user_auth_data_of_father: {
    },
    host_of_father: "",
  },
  data(){
    return {
    }
  },
  methods: {
    cancelClick: function(){
      let data={
        cancel_view: true,
      }
      this.$emit("cancel_view",data);
    },
    deleteRecordRequest: function (){
      return fetch(this.host_of_father+'/record/', {
        method: 'delete',
        headers: {
          'Authorization': this.user_auth_data_of_father.role+" "+this.user_auth_data_of_father.token,
          'content-type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify({
          user_id: this.user_auth_data_of_father.uid,
          title: this.record_of_father.title,
          location: this.record_of_father.location,
          year: this.record_of_father.year,
          month: this.record_of_father.month,
          day: this.record_of_father.day,
          startTimeHour: this.record_of_father.startTimeHour,
          startTimeMinute: this.record_of_father.startTimeMinute,
          endTimeHour: this.record_of_father.endTimeHour,
          endTimeMinute: this.record_of_father.endTimeMinute,
          detail: this.record_of_father.detail,
        }),

      })
    },
    deleteClick: async function (){
      let response = await this.deleteRecordRequest();
      response.json().then(json => {
        if (json.flag === true){
          this.cancelClick();
          this.$emit("delete_success");
        }else{
          alert("删除日程失败");
        }
      }).catch(e => {
        console.log(e);
        alert("删除日程失败");
      })
    },
  },
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
