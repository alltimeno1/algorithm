const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .split('\n')
  .slice(1)

input.forEach((e) => {
  const [H, W, N] = e.split(' ')

  let roomNum = parseInt((N - 1) / H) + 1
  let floor = N % H

  roomNum = roomNum > 9 ? String(roomNum) : '0' + roomNum
  floor = floor ? String(floor) : String(H)

  console.log(floor + roomNum)
})
