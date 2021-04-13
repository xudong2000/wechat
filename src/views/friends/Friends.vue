<template>
  <div id="friends">
    <van-index-bar :index-list="indexList">
      <div
        style="background: #ededed"
        v-for="(item, index) in indexList"
        :key="index"
      >
        <van-index-anchor :index="item" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: "Friends",
  data() {
    return {
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  created() {
    this.$store.state.title = "通讯录";
    this.$store.state.tabIsShow = true;
    this.$store.state.topIsShow = true;
  },
};
</script>

<style scoped>
#friends {
  background-color: #ededed;
}
</style>