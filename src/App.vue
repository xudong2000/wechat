<template>
  <div id="app">
    <router-view />
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "./components/tabBar/TabBar";

export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style>
</style>
