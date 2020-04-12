<template>
  <div id="app">
    <router-view ></router-view>
    <FooterBar />
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    FooterBar: Footer
  }
};
</script>

<style lang="scss">
@import './assets/sass/index';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: calc(100vh - 50px);
  background-color: $light-yellow;
}
</style>
