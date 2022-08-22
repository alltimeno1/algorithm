const fs = require('fs')
const input = +fs.readFileSync('baekjoon/input.txt').toString()

const question = '"재귀함수가 뭔가요?"'
const answer = '"재귀함수는 자기 자신을 호출하는 함수라네"'
const story1 = '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.'
const story2 = '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.'
const story3 = '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."'
const answered = '라고 답변하였지.'

console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.')

function echoRecursion(n) {
  const underscore = '____'.repeat(input - n)

  if (n === 0) {
    console.log(underscore + question)
    console.log(underscore + answer)
    console.log(underscore + answered)
    return
  }

  console.log(underscore + question)
  console.log(underscore + story1)
  console.log(underscore + story2)
  console.log(underscore + story3)

  echoRecursion(n - 1)

  console.log(underscore + answered)
}

echoRecursion(input)
