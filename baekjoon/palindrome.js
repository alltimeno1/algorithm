const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(0, -1)
  .map(String)

const answer = input.map((num) => {
  for (let i = 0; i < parseInt(num.length / 2); i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return 'no'
    }
  }

  return 'yes'
})

console.log(answer.join('\n'))
