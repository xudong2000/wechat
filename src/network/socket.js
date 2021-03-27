import Vue from 'vue'
import { io } from 'socket.io-client'
import { getOnline } from '../utils/storage'

// 连接服务器，获取socket对象
let socket = io('http://localhost:2077', {
  // 禁止默认自动断开重连
  reconnection: false,
  autoConnect: true,
})

if (socket !== undefined) {
  console.log('连接成功')
  socket.open()
  console.log(socket)
} else {
  console.log('连接失败')
}

// 将socket添加到Vue的原型上
Vue.prototype.$socket = socket
try {
  // 绑定自定义事件监听，来接收服务器发送的消息
  socket.on('connection', () => {
    console.log('客户端连接成功')
  })

  const res = getOnline()
  res === null ? '' : res
  socket.emit('user', res, () => {})
  socket.on('allUser', (users) => {
    console.log(users)
  })

  socket.on('disconnect', () => {
    console.log('已断开连接')
  })
} catch (error) {
  console.log('连接失败', error)
}
