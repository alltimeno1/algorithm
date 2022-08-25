const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map(Number)

let sorted = false

while (!sorted) {
  let count = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i + 1]) {
      const temp = input[i]
      input[i] = input[i + 1]
      input[i + 1] = temp
      count++
    }
  }

  sorted = count ? false : true
}

console.log(input.join('\n'))
