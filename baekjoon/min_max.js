const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .split('\n')[1]
  .split(' ')
  .map(Number)

let min = input[0]
let max = input[0]

for (let i = 1; i < input.length; i++) {
  if (input[i] < min) {
    min = input[i]
  }

  if (input[i] > max) {
    max = input[i]
  }
}

console.log(min, max)
