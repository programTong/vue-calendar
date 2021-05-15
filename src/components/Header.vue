<template>
  <div>
    <div>
      <img src="https://www.hualigs.cn/image/609f9a2709c53.jpg" alt="侧边栏图标"><span>{{year_today}}年{{month_today}}月</span><img src="https://www.hualigs.cn/image/609f9a270b171.jpg" alt="搜索图标">
    </div>
    <div>
      <span>月</span><span>周</span><span>日</span><span>日程</span><img src="" alt="添加事件">
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['year_today','month_today','day_today'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
img{
  width: 20px;
  height: 20px;
}
span {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
