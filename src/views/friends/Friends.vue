<template>
  <div id="friends">
    <h2>通讯录</h2>
  </div>
</template>

<script>
export default {
  name: "Friends",
  created() {
    this.$store.state.title = "通讯录";
    this.$store.state.tabIsShow = true;
    this.$store.state.topIsShow = true;
  },
};
</script>

<style scoped>
</style>