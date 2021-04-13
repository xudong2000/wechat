<template>
  <div id="profile">
    <div class="header">
      <div class="avatar">
        <img :src="userData.avatar" alt="" />
      </div>
      <div class="wxname">
        <p style="font-size: 24px; font-weight: 700; margin-bottom: 10px">
          king
        </p>
        <p style="font-size: 13px">微信号：WXD1691083073</p>
      </div>
    </div>

    <van-cell is-link style="margin: 10px 0" icon="certificate">支付</van-cell>

    <van-cell is-link icon="star-o">收藏</van-cell>
    <van-cell is-link icon="friends-o">朋友圈</van-cell>
    <van-cell is-link icon="smile-o">表情</van-cell>

    <van-cell is-link style="margin: 10px 0" icon="setting-o">设置</van-cell>

    <van-cell style="font-size: 16px; margin: 20px 0 0 0" @click="logout"
      >退出登录</van-cell
    >
  </div>
</template>

<script>
import { getUser, removeUser } from "../../utils/storage";

export default {
  name: "Profile",
  data() {
    return {
      userData: {},
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$store.state.title = "我的";
      this.$store.state.tabIsShow = true;
      this.$store.state.topIsShow = true;
      const res = getUser();
      this.userData = res;
    },
    logout() {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "是否退出登录？",
        })
        .then(() => {
          removeUser();
          this.$socket.emit("logout", this.userData);
          this.$router.replace("/login");
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
#profile {
  background-color: #ededed;
  .van-cell {
    height: 60px;
    padding: 19px 16px;
    font-weight: 700;
  }
  .header {
    height: 120px;
    background-color: #fff;
    padding: 20px;
    display: flex;
    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 10px;
    }
    .wxname {
      flex: 1;
      height: 60px;
    }
  }
}
</style>