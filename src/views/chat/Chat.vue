<template>
  <div id="chat">
    <ul class="msgList"></ul>
    <input-box />
  </div>
</template>

<script>
import { getUser } from "../../utils/storage";
import { mapState } from "vuex";
import InputBox from "../../components/inputBox/InputBox";

export default {
  name: "Chat",
  components: {
    InputBox,
  },
  data() {
    return {
      curUser: null,
      curChat: null,
      myData: null,
    };
  },
  created() {
    this.init();
    this.getCurData();
    console.log(this.curUser);
    console.log(this.curChat);
    console.log(this.myData);
  },
  methods: {
    // 初始化值
    init() {
      this.$store.state.tabIsShow = false;
      this.$store.state.topIsShow = true;
      this.$store.state.arrowIsShow = true;
      this.$store.state.moreIsShow = true;
    },
    // 获取当前聊天数据
    getCurData() {
      this.myData = getUser();

      let userid = this.$route.params.userid;
      for (let i of this.chatData) {
        if (i.to === userid) {
          this.curChat = i;
        }
      }

      for (let i of this.buddyData) {
        if (i._id === userid) {
          this.curUser = i;
        }
      }

      this.$store.state.title = this.curUser.username;
    },
  },
  computed: {
    ...mapState("chat", ["chatData", "buddyData"]),
  },
  destroyed() {
    this.$store.state.arrowIsShow = false;
    this.$store.state.moreIsShow = false;
  },
};
</script>

<style scoped>
.msgList {
  width: 100%;
  height: 100%;
  background-color: #ededed;
}
</style>