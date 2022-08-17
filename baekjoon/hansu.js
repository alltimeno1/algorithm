const fs = require('fs')
let input = fs.readFileSync('baekjoon/input.txt').toString()

let count = input >= 100 ? 99 : input

input = +input === 1000 ? 999 : +input

for (let i = 100; i <= +input; i++) {
  i = String(i)
  if (i[2] - i[1] === i[1] - i[0]) {
    count += 1
  }
}

console.log(count)
