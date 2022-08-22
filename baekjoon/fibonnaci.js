const fs = require('fs')
const input = +fs.readFileSync('baekjoon/input.txt').toString()

function getFibonacci(n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return getFibonacci(n - 1) + getFibonacci(n - 2)
}

console.log(getFibonacci(input))
