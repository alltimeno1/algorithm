const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map((cases) => cases.split(' ').slice(1))

const answer = input
  .map((cases) => {
    const mean = cases.reduce((prev, curr) => +prev + +curr, 0) / cases.length

    return cases.filter((score) => score > mean).length / cases.length
  })
  .map((ratio) => (Math.round(ratio * 100000) / 1000).toFixed(3) + '%')

console.log(answer.join('\n'))
