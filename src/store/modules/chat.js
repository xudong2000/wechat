import { getChatByParams } from '../../network/chat'
import { getUser } from '../../utils/storage'
import { findUser } from '../../network/user'

const state = {
  // 保存所有好友数据
  allUser: [],
  // 保存我的chat
  chatData: [],
  // 保存我的好友数据
  buddyData: [],
}

const getters = {}

const actions = {
  // 提交数据
  getData({ commit }, data) {
    // 根据参数获取chat
    getChatByParams(data[0], data[1]).then(
      (res) => {
        commit('mGetChatByParams', res.data.data)
      },
      (err) => {
        console.log('数据查询失败' + err)
      }
    )

    // 查询用户
    findUser().then(
      (res) => {
        commit('mFindUser', res.data.data)
      },
      (err) => {
        console.log('数据查询失败' + err)
      }
    )
  },

  aSetData({ commit }) {
    commit('mSetData')
  },
}

const mutations = {
  // 收集当前用户的所有chat数据
  mGetChatByParams(state, data) {
    const res = getUser()
    state.chatData = data.filter((obj) => {
      return obj.isDelete !== true
    })
  },

  // 收集所有用户数据
  mFindUser(state, data) {
    state.allUser = data.filter((obj) => {
      return obj.isDelete !== true
    })
  },

  // 设置数据
  mSetData(state) {
    // state.allUser = []
    // state.chatData = []
    state.buddyData = []
    for (let i of state.allUser) {
      for (let j of state.chatData) {
        if (i._id === j.to) {
          state.buddyData.push(i)
        }
      }
    }
    // console.log(state.buddyData)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
