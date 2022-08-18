const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .split(' ')
  .map(Number)

const [A, B, C] = input

console.log(B >= C ? -1 : Math.floor(A / (C - B)) + 1)
