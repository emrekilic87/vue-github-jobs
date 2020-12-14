<template>
 <Header />
 <router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>  

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0d1117;
  color: #ffffff;
  min-height: 100vh;

  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1em;
  }
}
</style>
