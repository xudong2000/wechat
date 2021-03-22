import { request } from './axios'

// 添加用户
export function addUser(data) {
  return request({
    method: 'post',
    url: '/user',
    data: data,
  })
}

// 查询用户
export function findUser() {
  return request({
    method: 'get',
    url: '/user',
  })
}

// 根据参数获取用户数据
export function getUserByParams(key, value) {
  return request({
    method: 'get',
    url: `/findUser?${key}=${value}`,
  })
}
