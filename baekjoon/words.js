const fs = require('fs')
const input = fs.readFileSync('baekjoon/input.txt').toString().trim()

const result = new Set()

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j <= input.length - i; j++) {
    result.add(input.slice(j, j + i))
  }
}

console.log(result.size)
