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
      <input type="text" placeholder="标题" id="input_div_add_record_dfakwer_title">
    </div>
    <div>
      <img src="https://ae01.alicdn.com/kf/U9eb85fd49ad94ad38d45b8128810a4bcc.jpg" alt="">
      <input type="text" placeholder="地点" id="input_div_add_record_dfakwer_location">
    </div>
    <div id="div_addrecord_dfosduw">
      <div>
        <img src="https://ae01.alicdn.com/kf/U6bd6e17fe0ec406a986bf3527dab25a9T.jpg" alt="">
        <span>
          <input type="text" placeholder="年" id="input_div_add_record_dfakwer_year">
          <input type="text" placeholder="月" id="input_div_add_record_dfakwer_month">
          <input type="text" placeholder="日" id="input_div_add_record_dfakwer_day">
        </span>
      </div>
      <div>
        <span>
          <span>开始</span>
          <input type="text" placeholder="小时(24小时制)" id="input_div_add_record_dfakwer_startTimeHour">
          <input type="text" placeholder="分钟" id="input_div_add_record_dfakwer_startTimeMinute">
        </span>
      </div>
      <div>
        <span>
          <span>结束</span>
          <input type="text" placeholder="小时(24小时制)" id="input_div_add_record_dfakwer_endTimeHour">
          <input type="text" placeholder="分钟" id="input_div_add_record_dfakwer_endtTimeMinute">
        </span>
      </div>
    </div>
    <div>
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzI3NjM2Njg5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTIxLjkgMjU5LjhoNDg5LjljMzEuNSAwIDU3LjEtMjguNiA1Ny4xLTYzLjlzLTI1LjUtNjMuOS01Ny02My45aC00OTBjLTMxLjUgMC01Ny4xIDI4LjYtNTcuMSA2My45czI1LjYgNjMuOSA1Ny4xIDYzLjl6TTEyOC43IDU3NS45aDc2Ni42YzM1LjMgMCA2My45LTI4LjYgNjMuOS02My45cy0yOC42LTYzLjktNjMuOS02My45SDEyOC43Yy0zNS4zIDAtNjMuOSAyOC42LTYzLjkgNjMuOXMyOC42IDYzLjkgNjMuOSA2My45ek04OTUuMyA3NjQuMkgxMjguN2MtMzUuMyAwLTYzLjkgMjguNi02My45IDYzLjlTOTMuNCA4OTIgMTI4LjcgODkyaDc2Ni42YzM1LjMgMCA2My45LTI4LjYgNjMuOS02My45cy0yOC42LTYzLjktNjMuOS02My45eiIgcC1pZD0iMjQ2MiI+PC9wYXRoPjwvc3ZnPg=="
           alt="详细图标">
      <input type="text" placeholder="详细" id="input_div_add_record_dfakwer_detail">
    </div>

  </div>
</template>

<script>
import GlobalVar from "../js/GlobalVar";

export default {
  name: "AddRecord",
  methods: {
    cancelClick: function(){
      this.$router.replace("/body");
    },
    addRecordRequest: function (){
      return fetch('http://127.0.0.1:8080/record/add/', {
        method: 'post',
        headers: {
          'Authorization': GlobalVar.role+" "+GlobalVar.token,
          'content-type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify({
          user_id: GlobalVar.uid,
          title: document.getElementById("input_div_add_record_dfakwer_title").value,
          location: document.getElementById("input_div_add_record_dfakwer_location").value,
          year: parseInt(document.getElementById("input_div_add_record_dfakwer_year").value) ,
          month: parseInt(document.getElementById("input_div_add_record_dfakwer_month").value),
          day: parseInt(document.getElementById("input_div_add_record_dfakwer_day").value),
          startTimeHour: parseInt(document.getElementById("input_div_add_record_dfakwer_startTimeHour").value),
          startTimeMinute: parseInt(document.getElementById("input_div_add_record_dfakwer_startTimeMinute").value),
          endTimeHour: parseInt(document.getElementById("input_div_add_record_dfakwer_endTimeHour").value),
          endTimeMinute: parseInt(document.getElementById("input_div_add_record_dfakwer_startTimeMinute").value),
          detail: document.getElementById("input_div_add_record_dfakwer_detail").value,
        }),

      })
    },
    confirmClick: async function (){
      let response = await this.addRecordRequest();
      response.json().then(json => {
        if (json.flag === true){
          this.$router.replace({
            path: "/body/monthview",
            query: {
              year: GlobalVar.year,
              month: GlobalVar.month,
              day: GlobalVar.day,
            }
          })
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
