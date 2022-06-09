const allStudents = [
  '나연',
  '정연',
  '모모',
  '사나',
  '지효',
  '미나',
  '다현',
  '채영',
  '쯔위',
]
const presentStudents = [
  '정연',
  '모모',
  '채영',
  '쯔위',
  '사나',
  '나연',
  '미나',
  '다현',
]

function getAbsentStudent(allArray, presentArray) {
  const studentsObj = {}
  // O(N)
  for (key of allArray) {
    studentsObj[key] = true
  }
  // O(N)
  for (key of presentArray) {
    delete studentsObj[key]
  }

  return Object.keys(studentsObj)[0]
}

console.log(getAbsentStudent(allStudents, presentStudents))
