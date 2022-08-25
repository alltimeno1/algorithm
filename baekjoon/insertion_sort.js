const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map(Number)

for (let i = 1; i < input.length; i++) {
  let idx = i

  while (idx !== 0 && input[idx] < input[idx - 1]) {
    const temp = input[idx]
    input[idx] = input[idx - 1]
    input[idx - 1] = temp
    idx -= 1
  }
}

console.log(input.join('\n'))
