// 0 => 1 2 3 4 5
// 1 => 1 3 6 10 15
// 2 => 1 4 10 20 35
// 3 => 1 5 15 35 70

const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .split('\n')
  .map(Number)

const memo = {}

function countPeople(k, n) {
  const address = `${k}-${n}`

  if (memo[address]) {
    return memo[address]
  }

  if (!k || !n) {
    return (memo[address] = n)
  }

  memo[address] = countPeople(k - 1, n) + countPeople(k, n - 1)

  return memo[address]
}

for (let i = 1; i < input.length; i += 2) {
  console.log(countPeople(input[i], input[i + 1]))
}
