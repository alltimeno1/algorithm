const fs = require('fs')
const input = fs
  .readFileSync('baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n')

const N = +input[0].split(' ')[0]
const pokemons = input.slice(1, 1 + N)
const quizzes = input.slice(1 + N)
const pokemonsObj = {}
let answer = ''

for (let i = 0; i < pokemons.length; i++) {
  pokemonsObj[i] = pokemons[i]
  pokemonsObj[pokemons[i]] = i
}

for (let quiz of quizzes) {
  if (+quiz) {
    answer += pokemonsObj[quiz - 1] + '\n'
    continue
  }

  answer += pokemonsObj[quiz] + 1 + '\n'
}

console.log(answer.trim())
