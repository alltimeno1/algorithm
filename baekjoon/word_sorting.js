const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .sort((a, b) =>
    a.length === b.length ? (a > b ? 1 : -1) : a.length - b.length
  )

console.log([...new Set(input)].join('\n'))
