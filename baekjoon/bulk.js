const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map((person) => person.split(' ').map(Number))

const ranking = []

input.forEach((person, idx) => {
  ranking[idx] =
    input.filter((each) => each[0] > person[0] && each[1] > person[1]).length +
    1
})

console.log(ranking.join(' '))
