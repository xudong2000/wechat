<template>
  <div id="tabBar">
    <router-link to="/home">
      <van-icon name="chat-o" v-show="$route.path !== '/home'" />
      <van-icon name="chat" v-show="$route.path === '/home'" />
      <span>微信</span>
    </router-link>

    <router-link to="/friends">
      <van-icon name="friends-o" v-show="$route.path !== '/friends'" />
      <van-icon name="friends" v-show="$route.path === '/friends'" />
      <span>通讯录</span>
    </router-link>

    <router-link to="/more">
      <van-icon name="browsing-history-o" v-show="$route.path !== '/more'" />
      <van-icon name="browsing-history" v-show="$route.path === '/more'" />
      <span>发现</span>
    </router-link>

    <router-link to="/profile">
      <van-icon name="manager-o" v-show="$route.path !== '/profile'" />
      <van-icon name="manager" v-show="$route.path === '/profile'" />
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style lang="less" scoped>
#tabBar {
  width: 100%;
  height: 60px;
  background-color: #f7f7f7;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: -1px 0 5px 0 #ccc;
  text-align: center;
  display: flex;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .van-icon {
    flex: 1;
    line-height: 40px;
    font-size: 25px;
  }
  span {
    flex: 1;
    line-height: 15px;
    font-size: 0.1625rem;
  }
}
</style>