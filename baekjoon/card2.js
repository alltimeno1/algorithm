const fs = require('fs')
const input = +fs.readFileSync('baekjoon/input.txt').toString().trim()
const cardList = []
let idx = 0

for (let i = 1; i <= input; i++) {
  cardList.push(i)
}

while (cardList.length >= idx + 2) {
  idx++
  cardList.push(cardList[idx])
  idx++
}

console.log(cardList[cardList.length - 1])
