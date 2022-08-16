const input = require('fs')
  .readFileSync('baekjoon/input.txt')
  .toString()
  .split('\n')

input.pop()

function bertrandPostulate(n) {
  let arr = []

  for (let i = n + 1; i <= 2 * n; i++) {
    arr.push(i)
  }

  for (let i = 2; i * i <= 2 * n; i += 2) {
    arr = arr.filter((num) => num % i !== 0)

    if (i === 2) {
      i--
    }
  }

  console.log(arr.length)
}

input.forEach((e) => bertrandPostulate(Number(e)))
