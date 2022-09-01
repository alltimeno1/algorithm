const fs = require('fs')
const input = fs.readFileSync('baekjoon/input.txt').toString().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const board = input.slice(1)
const EXAMPLE = 'BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB'
let minCnt = 32

for (let h = 0; h < N - 7; h++) {
  for (let w = 0; w < M - 7; w++) {
    let chessboard = ''
    let count = 0

    board.slice(h, h + 8).forEach((line) => (chessboard += line.slice(w, w + 8)))

    for (let i = 0; i < 64; i++) {
      if (chessboard[i] === EXAMPLE[i]) {
        count++
      }
    }

    count = count > 32 ? 64 - count : count
    minCnt = minCnt > count ? count : minCnt
  }
}

console.log(minCnt)
