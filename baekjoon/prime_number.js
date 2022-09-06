const fs = require('fs')
const nums = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')[1]
  .split(' ')
  .map(Number)
const primeList = []
let answer = 0

for (let i = 0; i <= 1000; i++) {
  if (i < 2) {
    primeList.push(false)
    continue
  }

  primeList.push(true)
}

for (let j = 2; j < 500; j++) {
  for (let n = j * 2; n <= 1000; n += j) {
    primeList[n] = false
  }
}

nums.forEach((num) => {
  if (primeList[num]) answer++
})

console.log(answer)
