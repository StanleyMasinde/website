<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <mainfooter></mainfooter>
  </div>
</template>

<style lang="scss"></style>

<script>
import navigation from "./components/Nav";
import mainfooter from "./components/Footer";
export default {
  components: {
    mainfooter,
    navigation
  }
};
</script>
