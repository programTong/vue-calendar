<template>
  <div @click="dealClick">
      <div>{{record.startTimeHour}}:{{record.startTimeMinute}} - {{record.endTimeHour}}:{{record.endTimeMinute}}</div>
      <div>{{record.title}}</div>
      <div>{{record.location}}</div>
  </div>
</template>

<script>
export default {
  name: "Record",
  props: {
    record: {},
  },
  data() {
    return {

    }
  },
  methods: {
    dealClick: function (){
      this.$emit("view_record");
    }
  }
}
</script>

<style scoped>
.div_record_110{
  border: 2px #000000 solid;
  margin: 5px 0px;
  padding: 0px 5px;
}
</style>
