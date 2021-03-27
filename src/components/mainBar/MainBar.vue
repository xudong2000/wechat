<template>
  <div id="mainBar" v-show="$route.path !== '/profile'">
    <div class="left">
      <van-icon
        name="arrow-left"
        @click="comeBack"
        v-show="$store.state.arrowIsShow"
      />
    </div>
    <div class="center">
      <span>{{ $store.state.title }}</span>
    </div>
    <div class="right">
      <van-icon name="search" class="topIcon" />

      <van-popover
        placement="bottom-end"
        v-model="showPopover"
        theme="dark"
        trigger="click"
        :actions="actions"
      >
        <template #reference>
          <van-icon name="add-o" class="topIcon" />
        </template>
      </van-popover>

      <van-icon
        name="ellipsis"
        @click="more"
        v-show="$store.state.moreIsShow"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBar",
  data() {
    return {
      showPopover: false,
      actions: [{ text: "发起群聊" }, { text: "添加朋友" }, { text: "扫一扫" }],
    };
  },
  methods: {
    comeBack() {
      this.$router.replace("/home");
    },
    more() {
      this.$toast("开发中。。。");
    },
  },
};
</script>

<style lang="less" scoped>
#mainBar {
  width: 100%;
  height: 60px;
  background-color: #f7f7f7;
  box-shadow: 0 1px 0 0 #ededed;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  div {
    flex: 1;
    text-align: center;
    line-height: 60px;
    font-weight: 700;
    font-size: 18px;
  }
  .left {
    font-size: 20px;
    text-align: left;
    line-height: 70px;
    padding-left: 10px;
  }
  .right {
    font-size: 20px;
    text-align: right;
    line-height: 70px;
    padding-right: 10px;
    .topIcon {
      margin-right: 10px;
      font-size: 22px;
    }
  }
}
</style>