import Vue from 'vue'
import { io } from 'socket.io-client'

// 设置io连接配置
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
  socket.on('connection', () => {
    console.log('客户端连接成功')
  })

  socket.on('disconnect', () => {
    console.log('已断开连接')
  })
} catch (error) {
  console.log('连接失败', error)
}
