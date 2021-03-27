import { request } from './axios'

// 添加chat
export function addChat(data) {
  return request({
    method: 'post',
    url: '/chat',
    data: data,
  })
}

// 根据参数获取chat数据
export function getChatByParams(key, value) {
  return request({
    method: 'get',
    url: `/findChat?${key}=${value}`,
  })
}
