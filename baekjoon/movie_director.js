const fs = require('fs')
let N = +fs.readFileSync('baekjoon/input.txt').toString().trim()
let movie = ''
let num = 666

while (N) {
  if (String(num).includes('666')) {
    N--
    movie = num
  }
  num++
}

console.log(movie)
