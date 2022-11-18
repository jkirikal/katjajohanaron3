<template>
  <header-compo></header-compo>
  <router-view />
  <footer-compo></footer-compo>
</template>

<script>
import FooterCompo from "../src/components/FooterCompo.vue"
import HeaderCompo from "../src/components/HeaderCompo.vue"

export default {

  
  name: 'App',
  components: { FooterCompo,
    HeaderCompo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
