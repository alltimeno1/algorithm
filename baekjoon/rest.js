const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')

const arr = new Array(42)

input.forEach((num) => {
  idx = num % 42
  arr[idx] = 1
})

console.log(arr.filter((num) => num).length)
