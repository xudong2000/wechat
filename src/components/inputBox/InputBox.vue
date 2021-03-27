<template>
  <div id="inputBox">
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入内容" />
    </van-cell-group>
    <van-button type="primary">发送</van-button>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
#inputBox {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  padding-left: 40px;
  background-color: #f7f7f7;
}
.van-cell-group {
  display: inline-block;
  border: 1px solid #000;
  vertical-align: bottom;
  margin-top: 8px;
  margin-right: 5px;
}
</style>