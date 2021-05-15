<template>
  <div id="app103">
    <Header/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MonthView from "./components/MonthView.vue";

export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    Header, MonthView
  }
}
</script>

<style>
#app103 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
