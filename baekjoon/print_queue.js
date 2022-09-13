const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map((line) => line.split(' '))

for (let i = 0; i < input.length; i += 2) {
  const [N, M] = input[i]
  const queue = input[i + 1].map((doc, idx) => [+doc, idx])
  const result = []

  while (queue.length) {
    if (queue.every((doc) => queue[0][0] >= doc[0])) {
      result.push(queue[0])
      queue.shift()
      continue
    }

    queue.push(queue.shift())
  }

  result.forEach((doc, idx) => {
    if (doc[1] === +M) {
      console.log(idx + 1)
    }
  })
}
