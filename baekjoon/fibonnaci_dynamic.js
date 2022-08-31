const fs = require('fs')
const n = +fs.readFileSync('baekjoon/input.txt').toString()

function fibonacciDynamic(n) {
  const memo = [1, 1]

  for (let i = 2; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n - 1]
}

console.log(fibonacciDynamic(n), n - 2)
