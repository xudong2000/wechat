import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'
import chat from './modules/chat'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 顶部栏中间内容
    title: '微信',
    // 导航栏是否显示
    tabIsShow: true,
    // 顶部栏是否显示
    topIsShow: true,
    // 顶部栏左边返回是否显示
    arrowIsShow: false,
    // 顶部栏右边更多是否显示
    moreIsShow: false,
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    chat,
  },

  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
})
