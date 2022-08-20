const fs = require('fs')
const input = +fs.readFileSync('baekjoon/input.txt').toString()
const decimals = []
let num = input

for (let i = 2; i * i <= input; i++) {
  if (num < i) {
    break
  }

  while (num % i === 0) {
    decimals.push(i)
    num = num / i
  }
}

if (num !== 1) {
  decimals.push(num)
}

if (decimals.length) {
  console.log(decimals.join('\n'))
}
