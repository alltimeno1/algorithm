const fs = require('fs')
const [x, y, w, h] = fs.readFileSync('baekjoon/input.txt').toString().split(' ').map(Number)

console.log(Math.min(x, y, w - x, h - y))
