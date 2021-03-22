import { addUser, findUser } from '../../network/user'

const state = {}

const getters = {}

const actions = {
  // 添加用户
  async addUser({ commit }, data) {
    let res = await addUser(data)
    console.log(res)
  },
}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
