const fs = require('fs')
const input = fs.readFileSync('baekjoon/input.txt').toString().split(' ')

const pieces = [1, 1, 2, 2, 2, 8]
// const answer = pieces.map((piece, idx) => piece - input[idx])

// console.log(answer.join(' '))

const answer = input
  .reduce((prev, curr, idx) => `${prev} ${pieces[idx] - curr}`, '')
  .trim()

console.log(answer)
