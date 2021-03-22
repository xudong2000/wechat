import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: '/api',
  })

  // axios请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      console.log(err)
    }
  )

  // axios响应拦截器
  instance.interceptors.response.use(
    (res) => {
      return res
    },
    (err) => {
      console.log(err)
    }
  )

  // 发送真正的网络请求
  return instance(config)
}
