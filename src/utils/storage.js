// 保存当前登录的用户数据
export function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

// 获取当前登录的用户数据
export function getUser() {
  const res = JSON.parse(localStorage.getItem('user'))
  return res
}

// 移除当前登录的用户数据
export function removeUser() {
  localStorage.clear()
}
