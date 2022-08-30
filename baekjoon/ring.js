const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .split('\n')[1]
  .split(' ')
  .map(Number)

let answer = ''

for (let i = 1; i < input.length; i++) {
  let gcd = 1

  for (let n = input[i]; n > 1; n--) {
    if (input[0] % n === 0 && input[i] % n === 0) {
      gcd = n
      break
    }
  }

  const result = `${input[0] / common}/${input[i] / common}`

  answer += answer ? '\n' + result : result
}

console.log(answer)
