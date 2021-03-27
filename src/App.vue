<template>
  <div id="app">
    <div class="place" v-show="$store.state.topIsShow"></div>
    <main-bar v-show="$store.state.topIsShow" />
    <router-view />
    <tab-bar v-show="$store.state.tabIsShow" />
  </div>
</template>

<script>
import TabBar from "./components/tabBar/TabBar";
import MainBar from "./components/mainBar/MainBar";

export default {
  name: "App",
  components: {
    TabBar,
    MainBar,
  },
};
</script>

<style>
.place {
  width: 100%;
  height: 60px;
}
</style>
