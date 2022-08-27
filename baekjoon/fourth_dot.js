const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((xy) => xy.split(' ').map(Number))

const dot = []

for (let i = 0; i < 2; i++) {
  if (input[0][i] === input[1][i]) {
    dot.push(input[2][i])
  } else if (input[0][i] === input[2][i]) {
    dot.push(input[1][i])
  } else {
    dot.push(input[0][i])
  }
}

console.log(dot.join(' '))
