<template>
  <div>
    <div v-for="record in records">
      <span>
        <div>{{record.startTime}}</div>
        <div>{{record.endTime}}</div>
      </span>
      <span>
        <div>{{record.title}}</div>
        <div>{{record.location}}</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Record",
  props: ['records','index_today'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
