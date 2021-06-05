<template>
  <div id="add_record_div_erfovxujlewrioewrtwe">
    <div id="add_record_div_erfovxujlewr">
      <img @click="cancelClick" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzI3NDEyNDU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExOTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTcxLjcgNTE0LjFsMTY0LjktMTY0LjljMTYuMy0xNi4zIDE2LjMtNDMuMSAwLTU5LjQtMTYuMy0xNi4zLTQzLjEtMTYuMy01OS40IDBMNTEyLjMgNDU0LjcgMzQ3LjQgMjg5LjhjLTE2LjMtMTYuMy00My4xLTE2LjMtNTkuNCAwLTE2LjMgMTYuMy0xNi4zIDQzLjEgMCA1OS40bDE2NC45IDE2NC45TDI4OCA2NzljLTE2LjMgMTYuMy0xNi4zIDQzLjEgMCA1OS40IDE2LjMgMTYuMyA0My4xIDE2LjMgNTkuNCAwbDE2NC45LTE2NC45IDE2NC45IDE2NC45YzE2LjMgMTYuMyA0My4xIDE2LjMgNTkuNCAwIDE2LjMtMTYuMyAxNi4zLTQzLjEgMC01OS40TDU3MS43IDUxNC4xeiIgcC1pZD0iMTE5MyI+PC9wYXRoPjwvc3ZnPg=="
           alt="取消新建日程">
      <span>新建日程</span>
      <img @click="confirmClick" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzI3NTEwMTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODE5LjIgMjc1LjJjLTE5LjItMTkuMi01MS4yLTE5LjItNzAuNCAwTDM5Ni44IDYzMy42bC0xMjgtMTI4Yy0xOS4yLTE5LjItNTEuMi0xOS4yLTcwLjQgMC0xOS4yIDE5LjItMTkuMiA1MS4yIDAgNzAuNGwxNjAgMTYwYzEyLjggMTIuOCAyNS42IDEyLjggMzguNCAxMi44IDEyLjggMCAyNS42LTYuNCAzOC40LTEyLjhsMzg0LTM4NEM4MzguNCAzMjYuNCA4MzguNCAyOTQuNCA4MTkuMiAyNzUuMnoiIHAtaWQ9IjIwMTMiPjwvcGF0aD48L3N2Zz4="
           alt="确定新建">
    </div>
    <div>
      <img src="https://ae01.alicdn.com/kf/U189d880af1f2449ca282ddf7a16e20e8z.jpg" alt="">
      <input type="text" placeholder="标题" v-model="title">
    </div>
    <div>
      <img src="https://ae01.alicdn.com/kf/U9eb85fd49ad94ad38d45b8128810a4bcc.jpg" alt="">
      <input type="text" placeholder="地点" v-model="location">
    </div>
    <div id="div_addrecord_dfosduw">
      <div>
        <img src="https://ae01.alicdn.com/kf/U6bd6e17fe0ec406a986bf3527dab25a9T.jpg" alt="">
        <span>
          <input type="text" placeholder="年" v-model="year">
          <input type="text" placeholder="月" v-model="month">
          <input type="text" placeholder="日" v-model="day">
        </span>
      </div>
      <div>
        <span>
          <span>开始</span>
          <input type="text" placeholder="小时(24小时制)" v-model="startTimeHour">
          <input type="text" placeholder="分钟"  v-model="startTimeMinute">
        </span>
      </div>
      <div>
        <span>
          <span>结束</span>
          <input type="text" placeholder="小时(24小时制)" v-model="endTimeHour">
          <input type="text" placeholder="分钟"  v-model="endTimeMinute">
        </span>
      </div>
    </div>
    <div>
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzI3NjM2Njg5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTIxLjkgMjU5LjhoNDg5LjljMzEuNSAwIDU3LjEtMjguNiA1Ny4xLTYzLjlzLTI1LjUtNjMuOS01Ny02My45aC00OTBjLTMxLjUgMC01Ny4xIDI4LjYtNTcuMSA2My45czI1LjYgNjMuOSA1Ny4xIDYzLjl6TTEyOC43IDU3NS45aDc2Ni42YzM1LjMgMCA2My45LTI4LjYgNjMuOS02My45cy0yOC42LTYzLjktNjMuOS02My45SDEyOC43Yy0zNS4zIDAtNjMuOSAyOC42LTYzLjkgNjMuOXMyOC42IDYzLjkgNjMuOSA2My45ek04OTUuMyA3NjQuMkgxMjguN2MtMzUuMyAwLTYzLjkgMjguNi02My45IDYzLjlTOTMuNCA4OTIgMTI4LjcgODkyaDc2Ni42YzM1LjMgMCA2My45LTI4LjYgNjMuOS02My45cy0yOC42LTYzLjktNjMuOS02My45eiIgcC1pZD0iMjQ2MiI+PC9wYXRoPjwvc3ZnPg=="
           alt="详细图标">
      <input type="text" placeholder="详细"  v-model="detail">
    </div>

  </div>
</template>

<script>

export default {
  name: "AddRecord",
  props: {
    user_auth_data_of_father: {},
    host_of_father: {},
  },
  data(){
    return {
      title: "",
      location: "",
      year:  "",
      month: "",
      day: "",
      startTimeHour: "",
      startTimeMinute: "",
      endTimeHour: "",
      endTimeMinute:"",
      detail:"" ,
    }
  },
  methods: {
    cancelClick: function(){
      this.$emit("cancel_add_record");
    },
    addRecordRequest: function (){
      return fetch(this.host_of_father +'/record/add', {
        method: 'post',
        headers: {
          'Authorization': this.user_auth_data_of_father.role+" "+this.user_auth_data_of_father.token,
          'content-type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify({
          user_id: this.user_auth_data_of_father.uid,
          title: this.title,
          location: this.location,
          year:  this.year,
          month: this.month,
          day: this.day,
          startTimeHour:this.startTimeHour ,
          startTimeMinute: this.startTimeMinute,
          endTimeHour: this.endTimeHour,
          endTimeMinute:this.endTimeMinute,
          detail: this.detail,
        }),

      })
    },
    confirmClick: async function (){
      if (this.title==="" || this.year===""||this.month===""||this.day===""||this.startTimeHour===""||this.startTimeMinute===""||
          this.endTimeHour===""||this.endTimeMinute===""){
        alert("标题或年或月或日或开始时或开始分或结束时或结束分为空");
        return;
      }
      if (!/\d{4}/.test(this.year) || !/\d{1,2}/.test(this.month) || !/\d{1,2}/.test(this.day)
          || !/\d{1,2}/.test(this.startTimeHour) || !/\d{1,2}/.test(this.startTimeMinute)
          || !/\d{1,2}/.test(this.endTimeHour) || !/\d{1,2}/.test(this.endTimeMinute)
      ){
        alert("年或月或日或开始时或开始分或结束时或结束分格式有误");
        return;
      }
      if (parseInt(this.month)<=0 || parseInt(this.month)>=13 ||
          parseInt(this.day)<=0 || parseInt(this.day)>=32 ||
          parseInt(this.startTimeHour)<=-1 || parseInt(this.startTimeHour)>=24 ||
          parseInt(this.startTimeMinute)<=-1 || parseInt(this.startTimeMinute)>=60 ||
          parseInt(this.endTimeHour)<=-1 || parseInt(this.endTimeHour)>=24 ||
          parseInt(this.endTimeMinute)<=-1 || parseInt(this.endTimeMinute)>=60
      ){
        alert("年或月或日或开始时或开始分或结束时或结束分格式有误");
        return;
      }
      let response = await this.addRecordRequest();
      response.json().then(json => {
        if (json.flag === true){
          this.$emit("add_success");
        }else{
          alert("添加日程失败");
        }
      }).catch(e => {
        console.log(e);
        alert("添加日程失败");
      })
    },
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
