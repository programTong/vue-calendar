<template>
  <div id="div_body_ljfsdouwerle" style="display: none">
    <div id="div_rwouvjnwerwo">
      <img @click="cancelClick" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzI3NDEyNDU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExOTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTcxLjcgNTE0LjFsMTY0LjktMTY0LjljMTYuMy0xNi4zIDE2LjMtNDMuMSAwLTU5LjQtMTYuMy0xNi4zLTQzLjEtMTYuMy01OS40IDBMNTEyLjMgNDU0LjcgMzQ3LjQgMjg5LjhjLTE2LjMtMTYuMy00My4xLTE2LjMtNTkuNCAwLTE2LjMgMTYuMy0xNi4zIDQzLjEgMCA1OS40bDE2NC45IDE2NC45TDI4OCA2NzljLTE2LjMgMTYuMy0xNi4zIDQzLjEgMCA1OS40IDE2LjMgMTYuMyA0My4xIDE2LjMgNTkuNCAwbDE2NC45LTE2NC45IDE2NC45IDE2NC45YzE2LjMgMTYuMyA0My4xIDE2LjMgNTkuNCAwIDE2LjMtMTYuMyAxNi4zLTQzLjEgMC01OS40TDU3MS43IDUxNC4xeiIgcC1pZD0iMTE5MyI+PC9wYXRoPjwvc3ZnPg=="
           alt="取消">
      <span>跳转指定年月日</span>
      <img @click="confirmClick" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzI3NTEwMTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODE5LjIgMjc1LjJjLTE5LjItMTkuMi01MS4yLTE5LjItNzAuNCAwTDM5Ni44IDYzMy42bC0xMjgtMTI4Yy0xOS4yLTE5LjItNTEuMi0xOS4yLTcwLjQgMC0xOS4yIDE5LjItMTkuMiA1MS4yIDAgNzAuNGwxNjAgMTYwYzEyLjggMTIuOCAyNS42IDEyLjggMzguNCAxMi44IDEyLjggMCAyNS42LTYuNCAzOC40LTEyLjhsMzg0LTM4NEM4MzguNCAzMjYuNCA4MzguNCAyOTQuNCA4MTkuMiAyNzUuMnoiIHAtaWQ9IjIwMTMiPjwvcGF0aD48L3N2Zz4="
           alt="跳转">
    </div>
    <div id="div_rwouvjnwerwowqqwe">
      <input type="text" placeholder="年" v-model="skip_date.year">
      <input type="text" placeholder="月"  v-model="skip_date.month">
      <input type="text" placeholder="日"  v-model="skip_date.day">
    </div>
  </div>
</template>

<script>
export default {
  name: "ToSpecificDate",
  data(){
    return {
      skip_date: {
        year: 2000,
        month: 12,
        day: 15,
      }

    }
  },
  methods: {
    cancelClick: function (){
      let el = document.getElementById("div_body_ljfsdouwerle");
      el.style.display="none";
    },
    confirmClick: function (){
      if (/\d{4}/.test(this.skip_date.year) && /\d{1,2}/.test(this.skip_date.month)
          && /\d{1,2}/.test(this.skip_date.day)
      ){
        if (0< parseInt(this.skip_date.month) &&parseInt(this.skip_date.month)<=12
            && 0< parseInt(this.skip_date.day) &&parseInt(this.skip_date.day)<=31
        ){
          let data = {
            skip_date: this.skip_date
          }
          this.$emit("skip_date",data);
          this.cancelClick();
        }else{
          alert("请输入有效年月日");
        }
      }else{
        alert("请输入有效年月日");
      }
    },
  }
}
</script>

<style scoped>
#div_rwouvjnwerwo>*{
  margin: 0px 20px;
}
#div_rwouvjnwerwowqqwe>*{
  width: 30%;
}
</style>
