const fs = require('fs')
const input = fs.readFileSync('baekjoon/input.txt').toString().split('\n')

let x = Number(input[0])
let y = Number(input[1])

const quadrant = x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3

console.log(quadrant)
