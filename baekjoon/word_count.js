const fs = require('fs')
const input = fs.readFileSync('baekjoon/input.txt').toString().trim()

console.log(input === '' ? 0 : input.split(' ').length)
