<template>
  <div id="home">
    <ul class="msgList">
      <li v-for="item in buddyData" :key="item._id" @click="toChat(item)">
        <div class="avatar">
          <img :src="item.avatar" alt="" />
        </div>
        <span>{{ item.username }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUser } from "../../utils/storage";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      show: false,
      isLoading: false,
    };
  },
  created() {
    this.$store.state.title = "微信";
    this.$store.state.tabIsShow = true;
    this.$store.state.topIsShow = true;
    this.getData();
  },
  computed: {
    ...mapState("chat", ["buddyData"]),
  },
  methods: {
    getData() {
      let res = getUser();
      if (res === null) this.$router.replace("/login");
      this.$store.dispatch("chat/getData", ["from", res._id]);
      this.$store.dispatch("chat/aSetData");
    },
    toChat(chatObj) {
      this.$router.push(`/chat${chatObj._id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.msgList {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  li {
    width: 100%;
    height: 52px;
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 14px;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      overflow: hidden;
      display: inline-block;
      vertical-align: top;
      margin-right: 10px;
    }
  }
  li:hover {
    background-color: #f7f7f7;
  }
}
</style>
