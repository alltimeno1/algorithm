const fs = require('fs')
const input = fs.readFileSync('baekjoon/input.txt').toString().split(' ')

let hour = Number(input[0])
let minute = Number(input[1])

minute = minute >= 45 ? minute - 45 : minute + 15
hour = minute >= 15 ? (hour - 1 < 0 ? hour + 23 : hour - 1) : hour

console.log(hour, minute)
