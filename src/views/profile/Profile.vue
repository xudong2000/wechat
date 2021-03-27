<template>
  <div id="profile">
    <h2>个人中心</h2>
    <van-button type="primary" @click="logout">退出登录</van-button>
  </div>
</template>

<script>
import { removeUser } from "../../utils/storage";

export default {
  name: "Profile",
  created() {
    this.$store.state.title = "我的";
    this.$store.state.tabIsShow = true;
    this.$store.state.topIsShow = true;
  },
  methods: {
    logout() {
      removeUser();
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
</style>