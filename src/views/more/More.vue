<template>
  <div id="more">
    <h2>发现</h2>
  </div>
</template>

<script>
export default {
  name: "More",
  created() {
    this.$store.state.title = "发现";
    this.$store.state.tabIsShow = true;
    this.$store.state.topIsShow = true;
  },
};
</script>

<style scoped>
</style>