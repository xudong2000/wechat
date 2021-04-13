<template>
  <div id="login">
    <van-button type="primary" class="loginBtn" @click="show = true"
      >登录</van-button
    >
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="top"
      :style="{ height: '100%', width: '100%' }"
    >
      <span class="title">微信登录</span>
      <van-tabs v-model="active">
        <van-tab title="普通登录">
          <van-form validate-first @submit="login">
            <van-field
              v-model="username"
              name="username"
              placeholder="请输入你的用户名"
              :rules="[
                {
                  pattern: /^[a-zA-Z][a-zA-Z_]{3,7}$/,
                  message: '只能为字母，且长度在4~8位之间',
                },
              ]"
            />
            <van-field
              type="password"
              v-model="password"
              name="password"
              placeholder="请输入你的密码"
              :rules="[
                {
                  pattern: /^[a-zA-Z]\w{5,17}$/,
                  message: '必须以字母开头，长度在6~12位之间',
                },
              ]"
            />
            <div style="margin: 16px">
              <van-button
                round
                block
                type="info"
                native-type="submit"
                :loading="isLoading"
                >登&nbsp;&nbsp;录</van-button
              >
            </div>
          </van-form>
        </van-tab>
        <van-tab title="手机号登录">
          <van-form validate-first @submit="phoneLogin">
            <van-field
              v-model="telephone"
              name="telephone"
              placeholder="请输入你的手机号"
              :rules="[{ pattern: /1\d{10}$/, message: '长度只能为11位数字' }]"
            />
            <div style="margin: 16px">
              <van-button
                round
                block
                type="info"
                native-type="submit"
                :loading="isLoading"
                >登&nbsp;&nbsp;录</van-button
              >
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
    </van-popup>
  </div>
</template>

<script>
import { getUserByParams, addUser } from "../../network/user";
import { saveUser, getUser } from "../../utils/storage";

export default {
  name: "Login",
  data() {
    return {
      // 是否加载中
      isLoading: false,
      // 是否显示登录页
      show: false,
      // 默认值为2
      active: 2,
      username: "",
      password: "",
      telephone: "",
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      let user = getUser();
      if (user !== null) this.$router.replace("/home");
      this.$store.state.tabIsShow = false;
      this.$store.state.topIsShow = false;
    },
    // 普通登录模块
    async login(values) {
      this.isLoading = true;
      const res = await getUserByParams("username", values.username);
      const data = res.data.data;
      if (data.length !== 0) {
        if (values.password === data[0].password) {
          setTimeout(() => {
            this.isLoading = false;
            this.$toast("登录成功");
            saveUser(data[0]);
            this.$socket.emit("login", data[0]);
            this.$router.replace("/home");
          }, 1000);
        } else {
          this.isLoading = false;
          this.$notify({ type: "danger", message: "密码错误" });
        }
      } else {
        setTimeout(() => {
          this.$dialog
            .confirm({
              title: "提示",
              message: "没有该用户，是否立即注册？",
            })
            .then(() => {
              setTimeout(async () => {
                this.isLoading = false;
                this.$toast("注册成功");
                let res = await addUser(values);
                console.log(res);
              }, 1000);
            })
            .catch(() => {
              this.isLoading = false;
              this.$toast("已取消注册");
            });
        }, 1000);
      }
    },
    // 手机号登录模块
    async phoneLogin(values) {
      this.isLoading = true;
      const res = await getUserByParams("telephone", values.telephone);
      const data = res.data.data;
      if (data.length !== 0) {
        setTimeout(() => {
          this.isLoading = false;
          this.$toast("登录成功");
          saveUser(data[0]);
          this.$socket.emit("login", data[0]);
          this.$router.replace("/home");
        }, 1000);
      } else {
        this.isLoading = false;
        this.$notify({ type: "danger", message: "该手机号未被注册" });
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/img/bg.jpg");
  background-position: center;
  background-size: 100%;
}
.loginBtn {
  position: absolute;
  left: 45%;
  top: 90%;
}
.van-form {
  height: auto;
  background-color: #fff;
  position: relative;
  padding: 10px;
}
.title {
  font-size: 20px;
  text-align: center;
  display: block;
  margin: 10px;
}
</style>