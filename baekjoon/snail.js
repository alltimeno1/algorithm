const fs = require('fs')
const [A, B, V] = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .split(' ')
  .map((e) => +e)
// /dev/stdin
console.log(Math.ceil((V - B) / (A - B)))
