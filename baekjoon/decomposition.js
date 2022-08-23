const fs = require('fs')
const input = +fs.readFileSync('baekjoon/input.txt').toString()
let min = 0

for (let i = 1; i <= input; i++) {
  const sum =
    i +
    i
      .toString()
      .split('')
      .reduce((acc, cur) => acc + +cur, 0)

  if (sum === input) {
    min = i
    break
  }
}

console.log(min)
