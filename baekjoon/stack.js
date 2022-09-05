const fs = require('fs')
const [count, ...nums] = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
const stack = []
const sequence = []
let answer = ''
let n = 0

for (let i = 1; i <= +count; i++) {
  if (stack.slice(-1)[0] === +nums[n]) {
    sequence.push(stack.pop())
    answer += '\n-'
    i--
    n++
    continue
  }

  if (+nums[n] !== i) {
    stack.push(i)
    answer += '\n+'
    continue
  }

  sequence.push(i)
  answer += '\n+\n-'
  n++
}

for (let i = stack.length - 1; i >= 0; i--) {
  sequence.push(stack[i])
  answer += '\n-'
}

let isSequence = true

for (let i = 0; i < sequence.length; i++) {
  if (sequence[i] !== +nums[i]) {
    isSequence = false
    break
  }
}

if (isSequence) {
  console.log(answer.trim())
} else {
  console.log('NO')
}
